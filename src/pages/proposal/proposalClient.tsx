import { Button } from "@/components/ui/button";
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
import { ChevronLeft, ChevronRight } from "lucide-react";


export function ProposalClient() {
  return (
    <div className="px-28 pb-20 py-10 max-[768px]:px-10">
      <div className="flex text-sm justify-center mb-10">
        <h1 className="upeercase text-[28px]">All Proposal</h1>
      </div>

      <Table className="w-full">
        <TableHeader className="text-center"></TableHeader>
        <TableBody>
          <TableRow className="flex flex-wrap items-center justify-between w-full hover:bg-gray_600 rounded-md p-2">
            <div>
              <TableCell className="shrink-0 w-full sm:w-auto">
                <Checkbox />
              </TableCell>
              <TableCell className="shrink-0 min-w-[200px] max-w-[200px] sm:w-auto font-semibold truncate rounded-md">
              Website Redesign
              </TableCell>
            </div>
            <TableCell className="w-full sm:flex-1 sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
              Full redesign of the main company website, including
              responsive layout, animations and new content pages.
              </span>
            </TableCell>
            <TableCell className="w-full sm:flex-1 sm:text-center sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
              R$14.000,00
              </span>
            </TableCell>
            <TableCell className="shrink-0 w-full gap-2 flex sm:w-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-14">
                Accept
             </Button>
              <Button className="bg-red-500 hover:bg-red-600 w-14">
                Denied
             </Button>
            </TableCell>
          </TableRow>

          <TableRow className="flex flex-wrap items-center justify-between w-full hover:bg-gray_600 rounded-md p-2">
            <div>
              <TableCell className="shrink-0 w-full sm:w-auto">
                <Checkbox />
              </TableCell>
              <TableCell className="shrink-0 min-w-[200px] max-w-[200px] sm:w-auto font-semibold truncate rounded-md">
                API Integration
              </TableCell>
            </div>
            <TableCell className="w-full sm:flex-1 sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
                Develop and integrate third-party API for payment processing and
                transaction verification in real-time.
              </span>
            </TableCell>
            <TableCell className="w-full sm:flex-1 sm:text-center sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
              R$14.000,00
              </span>
            </TableCell>
            <TableCell className="shrink-0 w-full gap-2 flex sm:w-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-14">
                Accept
             </Button>
              <Button className="bg-red-500 hover:bg-red-600 w-14">
                Denied
             </Button>
            </TableCell>
          </TableRow>

          <TableRow className="flex flex-wrap items-center justify-between w-full hover:bg-gray_600 rounded-md p-2">
            <div>
              <TableCell className="shrink-0 w-full sm:w-auto">
                <Checkbox />
              </TableCell>
              <TableCell className="shrink-0 min-w-[200px] max-w-[200px] sm:w-auto font-semibold truncate rounded-md">
                Mobile App UI
              </TableCell>
            </div>
            <TableCell className="w-full sm:flex-1 sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
                Design the user interface for the new mobile application,
                focused on intuitive navigation and clean visuals.
              </span>
            </TableCell>
            <TableCell className="w-full sm:flex-1 sm:text-center sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
              R$14.000,00
              </span>
            </TableCell>
            <TableCell className="shrink-0 w-full gap-2 flex sm:w-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-14">
                Accept
             </Button>
              <Button className="bg-red-500 hover:bg-red-600 w-14">
                Denied
             </Button>
            </TableCell>
          </TableRow>

          <TableRow className="flex flex-wrap items-center justify-between w-full hover:bg-gray_600 rounded-md p-2">
            <div>
              <TableCell className="shrink-0 w-full sm:w-auto">
                <Checkbox />
              </TableCell>
              <TableCell className="shrink-0 min-w-[200px] max-w-[200px] sm:w-auto font-semibold truncate rounded-md">
                Database Migration
              </TableCell>
            </div>
            <TableCell className="w-full sm:flex-1 sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
                Migrate existing MySQL database to PostgreSQL, preserving all
                relational structures and indexes.
              </span>
            </TableCell>
            <TableCell className="w-full sm:flex-1 sm:text-center sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
              R$14.000,00
              </span>
            </TableCell>
            <TableCell className="shrink-0 w-full gap-2 flex sm:w-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-14">
                Accept
             </Button>
              <Button className="bg-red-500 hover:bg-red-600 w-14">
                Denied
             </Button>
            </TableCell>
          </TableRow>

          <TableRow className="flex flex-wrap items-center justify-between w-full hover:bg-gray_600 rounded-md p-2">
            <div>
              <TableCell className="shrink-0 w-full sm:w-auto">
                <Checkbox />
              </TableCell>
              <TableCell className="shrink-0 min-w-[200px] max-w-[200px] sm:w-auto font-semibold truncate rounded-md">
                Email Marketing Setup
              </TableCell>
            </div>
            <TableCell className="w-full sm:flex-1 sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
                Setup Mailchimp campaign with automation for client onboarding
                and retention tracking.
              </span>
            </TableCell>
            <TableCell className="w-full sm:flex-1 sm:text-center sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
              R$14.000,00
              </span>
            </TableCell>
            <TableCell className="shrink-0 w-full gap-2 flex sm:w-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-14">
                Accept
             </Button>
              <Button className="bg-red-500 hover:bg-red-600 w-14">
                Denied
             </Button>
            </TableCell>
          </TableRow>

          <TableRow className="flex flex-wrap items-center justify-between w-full hover:bg-gray_600 rounded-md p-2">
            <div>
              <TableCell className="shrink-0 w-full sm:w-auto">
                <Checkbox />
              </TableCell>
              <TableCell className="shrink-0 min-w-[200px] max-w-[200px] sm:w-auto font-semibold truncate rounded-md">
                Internal Tool Update
              </TableCell>
            </div>
            <TableCell className="w-full sm:flex-1 sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
                Update internal reporting tool to support new KPIs and export
                capabilities for monthly reports.
              </span>
            </TableCell>
            <TableCell className="w-full sm:flex-1 sm:text-center sm:min-w-0 sm:max-w-[680px] line-clamp-2">
              <span className="line-clamp-2">
              R$14.000,00
              </span>
            </TableCell>
            <TableCell className="shrink-0 w-full gap-2 flex sm:w-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-14">
                Accept
             </Button>
              <Button className="bg-red-500 hover:bg-red-600 w-14">
                Denied
             </Button>
            </TableCell>
          </TableRow>
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