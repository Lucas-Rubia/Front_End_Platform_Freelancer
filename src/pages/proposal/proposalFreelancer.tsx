import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { EBaseStatus } from "@/enum/baseStatus";
import { useProposal } from "@/hooks/useProposal";
import { ChevronLeft, ChevronRight } from "lucide-react";


export function ProposalFreelancer() {

const { proposal } = useProposal();

  return (
    <div className="bg-gray_700 px-28 pb-20 py-10 max-[768px]:px-10">
      <div className="flex text-sm justify-center mb-10">
        <h1 className="upeercase text-[28px]">All Proposal</h1>
      </div>

      <Table className="w-full">
        <TableHeader className="text-center"></TableHeader>
        <TableBody>
          <div>
            {proposal?.map((proposal) => (
              <TableRow className="flex flex-wrap items-center justify-between w-full hover:bg-gray_600 rounded-md p-2">
                <div>
                  <TableCell className="shrink-0 w-full sm:w-auto">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="shrink-0 min-w-[200px] max-w-[200px] sm:w-auto font-semibold truncate rounded-md">
                    {proposal.titleProject}
                  </TableCell>
                </div>
                <TableCell className="w-full sm:flex-1 sm:min-w-0 sm:max-w-[680px] line-clamp-2">
                  <span className="line-clamp-2">{proposal.message}</span>
                </TableCell>
                <TableCell className="w-full sm:flex-1 sm:text-center sm:min-w-0 sm:max-w-[680px] line-clamp-2">
                  <span className="line-clamp-2">
                    R$ {proposal.proposedValue.toFixed(2)}
                  </span>
                </TableCell>
                <TableCell className="shrink-0 w-full gap-2 flex sm:w-auto">
                  <p>
                    {proposal.status === EBaseStatus.ACCEPT
                      ? "Accepted"
                      : proposal.status === EBaseStatus.CANCELED
                      ? "Canceled"
                      : proposal.status === EBaseStatus.PENDING
                      ? "Pending"
                    : "Error"}
                  </p>
                  <span
                    className={`rounded-full size-4 ${
                      proposal.status === EBaseStatus.ACCEPT
                        ? "bg-green-500"
                        : proposal.status === EBaseStatus.CANCELED
                        ? "bg-red-500"
                        : proposal.status === EBaseStatus.PENDING ? "bg-orange-500"
                        : "Error"
                    } shrink-0`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </div>
        </TableBody>
        <Separator className="bg-gray-300" />

        <TableCaption>
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className=" hover:bg-gray_600 max-[425px]:hidden"
                />
                <ChevronLeft
                  href="#"
                  className=" hover:bg-gray_600 max-[425px]:flex min-[425px]:hidden"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className=" hover:bg-gray_600">
                  1
                </PaginationLink>
                <PaginationLink
                  href="#"
                  className=" hover:bg-gray_600 max-[425px]:hidden"
                >
                  2
                </PaginationLink>
                <PaginationLink
                  href="#"
                  className=" hover:bg-gray_600 max-[768px]:hidden"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className=" hover:bg-gray_600 max-[425px]:hidden"
                >
                  50
                </PaginationLink>
                <PaginationNext
                  href="#"
                  className=" hover:bg-gray_600 max-[425px]:hidden"
                />
                <ChevronRight
                  href="#"
                  className=" hover:bg-gray_600 max-[425px]:flex min-[425px]:hidden"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </TableCaption>
      </Table>
    </div>
  );
}