#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const projectName = process.argv[2];
if (!projectName) {
  console.error('Please provide a project name.');
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);
const git_repo = 'https://github.com/one-chance/react-emotion-starter';

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name.`,
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log('Downloading files...');
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

    process.chdir(projectPath);

    console.log('Installing dependencies...');
    execSync('npm install');

    await fs.promises.rm('./.git', { recursive: true, force: true });
    await fs.promises.rm(path.join(projectPath, 'bin'), { recursive: true });

    console.log('The installation is done, this is ready to use !');
  } catch (error) {
    console.log(error);
  }
}
main();
