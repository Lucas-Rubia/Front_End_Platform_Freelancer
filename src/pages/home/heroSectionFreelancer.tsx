
import { getRandomGradient } from "@/components/get-random-gradient";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useProjects } from "@/hooks/useProjects";
import { format } from 'date-fns';


export function HeroSectionFreelancer() {
  const { projects, projectExpired } = useProjects();

  return (
    <div className="bg-gray_700 px-28 pb-20 py-10 max-[768px]:px-10">
      <div className="flex text-sm justify-center mb-10">
        <h1 className="upeercase text-[28px]">All Projects</h1>
      </div>

      <div className="grid grid-cols-12 gap-5 max-w-[1000px] mx-auto max-[1024px]:grid-cols-1">
        {projects?.map((project) => (
          <Card key={project.id} className="col-span-6 bg-gray_600 border-none flex flex-col">
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span
                    className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                  />
                  <CardTitle className="max-[768px]:text-lg">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  {project.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex justify-between text-sm ">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold ml-1">
                    {format(project.deadLine, "dd/MM/yyyy")}
                  </span>
                </p>
                <Badge
                  className={`${
                    projectExpired(project.deadLine)
                      ? "bg-red-500"
                      : "bg-green-500"
                  } ml-1 uppercase border-ring-2 text-gray_700 rounded-md border-gray_300 hover:bg-transparent text-center`}
                >
                  {projectExpired(project.deadLine) ? "Fechado" : "Aberto"}
                </Badge>
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