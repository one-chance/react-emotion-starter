import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Flex, Icon } from '@components/shared';

type PaginationProps = {
  currentPage: number;
  totalPage: number;
  margin?: string;
  padding?: string;
};

export default function Pagination({
  currentPage,
  totalPage,
  margin,
  padding,
}: PaginationProps) {
  const navigate = useNavigate();
  const { search } = useLocation();

  const movePage = (_page: number) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', _page.toString());
    navigate(`?${searchParams.toString()}`);
  };

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPage, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageList = getPageNumbers();

  return (
    <Flex
      alignItems="center"
      gap={10}
      justifyContent="center"
      margin={margin}
      padding={padding}
    >
      <Button
        disabled={currentPage === 1}
        onClick={() => movePage(Math.max(1, currentPage - 5))}
      >
        <Icon color="icon-color" name="arrowLeft" size={16} />
      </Button>

      {pageList.map((pageNumber: number) => (
        <Button
          key={pageNumber}
          background={currentPage === pageNumber ? 'primary' : undefined}
          border="primary"
          color="text-color"
          height={36}
          radius={8}
          width={36}
          onClick={() => movePage(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}

      <Button
        disabled={totalPage < 5 || currentPage === totalPage}
        onClick={() => movePage(Math.min(totalPage, currentPage + 5))}
      >
        <Icon color="icon-color" name="arrowRight" size={16} />
      </Button>
    </Flex>
  );
}
