import { ReactNode, useEffect, useMemo, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { ExampleModal, Example2Modal } from '@components/modal';
import {
  Button,
  Input,
  Select,
  Option,
  Textarea,
  TextField,
  Box,
  Image,
  Link,
  NavLink,
  Text,
  Heading,
  Label,
  Svg,
  Icon,
  Flex,
  Grid,
  Pagination,
  Paragraph,
} from '@components/shared';
import { useModal } from '@hooks/useModal';

type ExamplesProps = {
  component: string;
};

const NAMES = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU', 'VWX', 'YZ'];

const Examples = ({ component }: ExamplesProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { openModal, closeModal, showModal } = useModal();
  const [currentPage, setCurrentPage] = useState(1);

  const [name, setName] = useState(0);
  const [text, setText] = useState('');

  const selectName = (index: number) => {
    setName(index);
  };

  const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (component !== 'pagination') return;

    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get('page') || '1', 10);

    console.log('실행');

    if (isNaN(page) || page <= 0) {
      queryParams.set('page', '1');
      navigate(`?${queryParams.toString()}`);
    } else {
      setCurrentPage(page);
    }
  }, [location, navigate]);

  const ButtonExample = useMemo(
    () => (
      <Button
        background="primary"
        border="white"
        minHeight={40}
        minWidth={80}
        padding="0 10px"
        radius={4}
      >
        Button
      </Button>
    ),
    [],
  );

  const InputExample = useMemo(
    () => <Input placeholder="텍스트를 입력하세요." width={240} />,
    [],
  );

  const SelectExample = (
    <Select maxHeight={180} name={NAMES[name]}>
      <Option selected={NAMES[name]} values={NAMES} onSelect={selectName} />
    </Select>
  );

  const TextareaExample = useMemo(
    () => (
      <Textarea
        background="white"
        color="black"
        minWidth="full"
        placeholder="텍스트를 입력하세요."
        radius={4}
        rows={3}
      />
    ),
    [],
  );

  const TextFieldExample = (
    <TextField
      as="underlined"
      border="gray"
      placeholder="텍스트"
      value={text}
      width={240}
      onChange={inputText}
    />
  );
  const BoxExample = useMemo(
    () => <Box background="green" height="full" width="full" />,
    [],
  );

  const FlexExample = useMemo(
    () => (
      <Flex gap={20}>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Flex>
    ),
    [],
  );

  const GridExample = useMemo(
    () => (
      <Grid
        columns="repeat(2, 200px)"
        css={{ placeItems: 'center' }}
        rows="repeat(2, 30px)"
      >
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
        <Text>Item4</Text>
      </Grid>
    ),
    [],
  );

  const ModalExample = (
    <>
      <Button
        background="primary"
        minHeight={40}
        radius={4}
        width={120}
        onClick={() => openModal('example-modal')}
      >
        Modal 열기
      </Button>
      {showModal('example-modal') && (
        <ExampleModal onClose={() => closeModal('example-modal')} />
      )}
    </>
  );

  const SlideModalExample = (
    <>
      <Button
        background="primary"
        minHeight={40}
        radius={4}
        width={120}
        onClick={() => openModal('example2-modal')}
      >
        Modal 열기
      </Button>
      {showModal('example2-modal') && (
        <Example2Modal onClose={() => closeModal('example2-modal')} />
      )}
    </>
  );

  const ImageExample = useMemo(
    () => <Image alt="vite 로고" src="/logo/vite.svg" />,
    [],
  );

  const IconExmple = useMemo(
    () => <Icon color="icon-color" name="menu" size={16} />,
    [],
  );

  const SvgExample = useMemo(
    () => (
      <Svg fill="icon-color" height={16} width={16}>
        <path
          clipRule="evenodd"
          d="M5.53 4.47a.75.75 0 00-1.06 1.06L10.94 12l-6.47 6.47a.75.75 0 101.06 1.06L12 13.06l6.47 6.47a.75.75 0 101.06-1.06L13.06 12l6.47-6.47a.75.75 0 00-1.06-1.06L12 10.94 5.53 4.47z"
          fillRule="evenodd"
        />
      </Svg>
    ),
    [],
  );

  const LinkExample = useMemo(
    () => (
      <Link color="text-color" href="https://github.com/one-chance">
        Github
      </Link>
    ),
    [],
  );

  const NavLinkExample = useMemo(
    () => (
      <NavLink color="text-color" to="/">
        홈으로
      </NavLink>
    ),
    [],
  );

  const PaginationExample = (
    <Pagination currentPage={currentPage} totalPage={10} />
  );

  const TextExample = useMemo(
    () => (
      <Text color="text-color" size="small" weight="bold">
        텍스트
      </Text>
    ),
    [],
  );

  const LabelExample = useMemo(
    () => (
      <Label color="text-color" htmlFor="search">
        라벨
      </Label>
    ),
    [],
  );

  const HeadingExample = useMemo(
    () => (
      <Heading as="h2" color="text-color" margin="0px">
        제목
      </Heading>
    ),
    [],
  );

  const PragraphExample = useMemo(
    () => (
      <Paragraph color="text-color" size="small" width="full">
        문장1
        <br />
        문장2
      </Paragraph>
    ),
    [],
  );

  const TotalExamples: { [key: string]: ReactNode } = {
    button: ButtonExample,
    input: InputExample,
    select: SelectExample,
    textarea: TextareaExample,
    'text-field': TextFieldExample,
    box: BoxExample,
    flex: FlexExample,
    grid: GridExample,
    modal: ModalExample,
    'slide-modal': SlideModalExample,
    image: ImageExample,
    icon: IconExmple,
    svg: SvgExample,
    link: LinkExample,
    navlink: NavLinkExample,
    pagination: PaginationExample,
    text: TextExample,
    label: LabelExample,
    heading: HeadingExample,
    paragraph: PragraphExample,
  };

  return TotalExamples[component];
};

export default Examples;
