import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const folderNames = [
  `apis`,
  `assets`,
  `components`,
  `constants`,
  `hooks`,
  `interfaces`,
  `locales`,
  `pages`,
  `routes`,
  `states`,
  `styles`,
  `utils`,
];

const aliases = folderNames.map((folder) => ({
  find: `@${folder}`,
  replacement: path.resolve(__dirname, `src`, folder),
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  resolve: {
    alias: aliases,
  },
});
