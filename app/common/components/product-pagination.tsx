import { useSearchParams } from "react-router";
import { Pagination, PaginationItem, PaginationEllipsis, PaginationLink, PaginationPrevious, PaginationNext } from "./ui/pagination";

import { PaginationContent } from "./ui/pagination";

type ProductPaginationProps = {
  totalPages: number;
};

export default function ProductPagination({
  totalPages,
}: ProductPaginationProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page") ?? 1) ;
    const getUrlWithPage = (page: number) => { // onClick 이벤트를 사용 시 링크로서의 기능이 상실되어 별도 함수로 처리
      const params = new URLSearchParams(searchParams);
      params.set("page", String(page));
      return `?${params}`;
    };
  return (
    <Pagination>
      <PaginationContent>
        {page === 1 ? null : (
        <>
          <PaginationItem>
            <PaginationPrevious to={getUrlWithPage(page - 1)}/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to={getUrlWithPage(page - 1)}>{page - 1}</PaginationLink>
          </PaginationItem>
        </>
        )}
        <PaginationItem>
          <PaginationLink to={getUrlWithPage(page)} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        {page === totalPages ? null : (
          <>
            <PaginationItem>
              <PaginationLink to={getUrlWithPage(page + 1)}>{page + 1}</PaginationLink>
            </PaginationItem>
            {page + 1 === totalPages ? null : (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext to={getUrlWithPage(page + 1)} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>

  );
}
