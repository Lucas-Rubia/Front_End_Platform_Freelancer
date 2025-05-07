
import { getRandomGradient } from "@/components/get-random-gradient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { EBaseStatus } from "@/enum/baseStatus";
import { useContract } from "@/hooks/useContract";
import { images } from "@/utils/imagem";
import { ArrowRight } from "lucide-react";



export function ContractFreelancer(){

  const {contract} = useContract();


    return (
      <div className="bg-gray_700 px-28 pb-20 py-10 max-[768px]:px-10">
        <div className="flex text-sm justify-center mb-10">
          <h1 className="uppercase text-[28px] text-center leading-8">
            All yours Contracts
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-5 max-w-[1000px] mx-auto max-[1024px]:grid-cols-1">
          {contract.map((contract) => (
            <Card className="col-span-6 bg-gray_600 border-none flex flex-col ">
              <CardHeader>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <span
                      className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                    />
                    <CardTitle className="max-[768px]:text-lg">
                      {contract.titleProject}
                    </CardTitle>
                  </div>
                  <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                    {contract.subcriptionProject}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex justify-between text-sm items-center max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
                  <div className="flex gap-2 items-center">
                    <Avatar>
                      <AvatarImage src={images.Avatar} />
                      <AvatarFallback>Avatar1</AvatarFallback>
                    </Avatar>
                    <ArrowRight color="#C3C3D1" />
                    <Avatar>
                      <AvatarImage src={images.Avatar2} />
                      <AvatarFallback>Avatar2</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>
                      {contract.status === EBaseStatus.ACCEPT
                        ? "Accepted"
                        : contract.status === EBaseStatus.CANCELED
                        ? "Canceled"
                        : contract.status === EBaseStatus.PENDING
                        ? "Pending"
                        : "Error"}
                    </p>
                    <span
                      className={`rounded-full size-4 ${
                        contract.status === EBaseStatus.ACCEPT
                          ? "bg-green-500"
                          : contract.status === EBaseStatus.CANCELED
                          ? "bg-red-500"
                          : contract.status === EBaseStatus.PENDING
                          ? "bg-orange-500"
                          : "Error"
                      } shrink-0`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className=" hover:bg-gray_600" />
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
              <PaginationNext href="#" className=" hover:bg-gray_600 " />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
}