import {
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    Pagination as PaginationUI,
} from "@/components/ui/pagination";
import { IPagination } from "@/types/api";
import { getVisiblePages } from "@/utils/getVisiblePages";

interface PaginationProps{
    pagination: IPagination;
    setPage: (page: number) => void;
}

export function Pagination({ pagination, setPage }: PaginationProps) {
    const visiblePages = getVisiblePages(
        pagination.currentPage,
        pagination.totalPages
    );

    return (
        <PaginationUI className="mt-10">
            <PaginationContent>
            <PaginationItem>
                <PaginationPrevious
                onClick={() => setPage(pagination.currentPage - 1)}
                data-active={pagination.currentPage === 1}
                className=" hover:bg-gray_600 data-[active=true]:opacity-50"
                />
            </PaginationItem>
            <PaginationItem>
                {visiblePages.map((page) => (
                <PaginationLink
                    key={page}
                    onClick={() => setPage(page)}
                    data-active={pagination.currentPage === page}
                    className="hover:bg-gray_600 max-[425px]:hidden data-[active=true]:bg-gray_500"
                >
                    {page}
                </PaginationLink>
                ))}
            </PaginationItem>
            <PaginationItem>
                <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                onClick={() => setPage(pagination.totalPages)}
                className=" hover:bg-gray_600 max-[425px]:hidden"
                >
                {pagination.totalPages}
                </PaginationLink>
                <PaginationNext
                onClick={() => setPage(pagination.currentPage + 1)}
                data-active={pagination.currentPage === pagination.totalPages}
                className=" hover:bg-gray_600 data-[active=true]:opacity-50"
                />
            </PaginationItem>
            </PaginationContent>
        </PaginationUI>
    );
}