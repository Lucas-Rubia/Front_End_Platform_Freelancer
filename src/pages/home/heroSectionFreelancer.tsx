
import { getRandomGradient } from "@/components/get-random-gradient";
import { Pagination } from "@/components/pagination";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useProjects } from "@/hooks/useProjects";
import { format } from 'date-fns';
import { Frown } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";


export function HeroSectionFreelancer() {
  const {projects, projectExpired, pagination, setPage, fetchProjects } = useProjects();
  const [searchParams] = useSearchParams();

  const [title, setTitle] = useState("");

   const userIdFromUrl = searchParams.get('userId');
   const userNameFromUrl = searchParams.get('userName');

   useEffect(() => {
     if (userIdFromUrl && userNameFromUrl) {
       fetchProjects(Number(userIdFromUrl));
       setTitle(`Projetos de ${userNameFromUrl}`);
     } else if (!userIdFromUrl && !userNameFromUrl){
       fetchProjects();
       setTitle("Todos os projetos");
     }
   }, [userIdFromUrl, userNameFromUrl, fetchProjects]); 
  

  if(projects.length === 0) return (
    <div className="flex flex-col justify-center p-4 text-center items-center" style={{ height: "calc(100vh - 82px)" }}>
      <h1 className="text-lg mb-4 min-[768px]:text-2xl">
        Lamentamos, mas não encontramos nenhum projeto
      </h1>
      <Frown className="size-5 min-[768px]:size-8" />
    </div>
  );

  //   const sortedProjects = [...projects].sort((a, b) => 
  //   (projectExpired(a.deadLine) === projectExpired(b.deadLine)) ? 0 : projectExpired(a.deadLine) ? 1 : -1
  // );

  return (
    <div className="px-28 pb-20 py-10 max-[768px]:px-10">
      <div className="flex text-sm justify-center mb-10">
        <h1 className="uppercase text-[28px]">{title}</h1>
      </div>

      <div className="grid grid-cols-12 gap-5 max-w-[1000px] mx-auto max-[1024px]:grid-cols-1">
        {projects.map((project) => (
          <NavLink
            key={project.id}
            to={`/${project.id}/projetosFreelancer`}
            className="col-span-6"
          >
            <Card className="bg-gray_600 border-none flex flex-col h-full">
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
                <div className="flex justify-between text-sm">
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
                    } ml-1 uppercase border-ring-2 text-gray_700 rounded-md border-gray_300 text-center pointer-events-none`}
                  >
                    {projectExpired(project.deadLine) ? "Fechado" : "Aberto"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </NavLink>
        ))}
      </div>
      <Pagination pagination={pagination} setPage={setPage} />
    </div>
  );
}