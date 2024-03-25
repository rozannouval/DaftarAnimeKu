import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationPage({ page, setPage, lastPage }) {
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  // Function to generate an array of page numbers surrounding the current page
  const generatePageNumbers = () => {
    const range = 2; // Show 2 pages before and after the current page
    const start = Math.max(1, page - range);
    const end = Math.min(lastPage, page + range);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  return (
    <div className="py-6 px-4 flex justify-center items-center text-slate-800 gap-6 text-2xl sm:text-xl">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {page <= 1 ? (
              <PaginationPrevious href="#page" />
            ) : (
              <PaginationPrevious href="#page" onClick={handlePrevPage} />
            )}
          </PaginationItem>
          {page > 3 && (
            <>
              <PaginationItem>
                <PaginationLink href="#page" onClick={() => setPage(1)}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}
          {generatePageNumbers().map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#page"
                isActive={page === pageNumber}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
          {page + 2 < lastPage && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#page" onClick={() => setPage(lastPage)}>
                  {lastPage}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            {page >= lastPage ? (
              <PaginationNext href="#page" />
            ) : (
              <PaginationNext href="#page" onClick={handleNextPage} />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
