import { ButtonEnviarProposta } from "@/components/buttonEnviarProposta";
import { getRandomGradient } from "@/components/get-random-gradient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useProjects } from "@/hooks/useProjects";
import { images } from "@/utils/imagem";
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";



  export function ProjectsFreelancer() {
    const {projectId} = useParams<{projectId:string}>();
    
    const {fetchProjectByID, projectById, loading } = useProjects();
    const navigate = useNavigate();
    
    useEffect(() => {
      fetchProjectByID(Number(projectId));
    }, [fetchProjectByID, projectId]);

      if (loading) {
      return (
        <span className="animate-pulse"> <Loader2 className="size-10 mx-auto mt-10 animate-spin flex"/> </span>
      )
    }

      if (!projectById) {
        toast("Informações do projeto não consta na nossa base de dados")
      return <Navigate replace to="/" />;
    }

    if(!loading && (!projectId || !projectById)) return <Navigate replace to="/" />

    let publishedDateRelativeNow = "";
    if (projectById?.createdAt) {
      publishedDateRelativeNow = formatDistanceToNow(new Date(projectById.createdAt), {
        locale: ptBR,
        addSuffix: true,
      });
    }

  const handleViewAllUserProjects = () => {
    if (projectById?.userId && projectById?.name) {
      navigate(
        `/?userId=${projectById.userId}&userName=${encodeURIComponent(
          projectById.name
        )}`
      );
    } else if (projectById?.userId) {
      navigate(`/?userId=${projectById.userId}}`);
    } else {
      toast.error("Não foi possível identificar o usuário deste projeto.");
    }
  };

    return (
      <div className="px-28 pb-20 pt-10 flex items-start max-[1330px]:flex-col max-[1330px]:juntify-center max-[1330px]:items-center max-[1330px]:gap-10 min-[320px]:px-4 min-[1330px]:jutify-center min-[1330px]:px-28 min-[1440px]:justify-center">
        <div className="bg-gray_600 gap-10 p-10 rounded-[10px] max-w-[728px] min-[320px]:p-5">
          <div className="flex gap-[70px] min-[320px]:flex-col min-[320px]:items-center min-[320px]:gap-10 min-[768px]:flex-row min-[768px]:justify-between min-[768px]:items-start">
            <div className="flex  flex-col min-[320px]:items-center min-[768px]:items-start">
              <Badge className="uppercase  w-fit text-12 text-success_light bg-success hover:bg-success px-3 py-2 ">
                Aceitando Proposta
              </Badge>
              <p className="heading-28 py-4 flex-wrap max-[768px]:heading-28">
                {projectById.title}
              </p>
              <p className="text-14 text-gray_300">
                {publishedDateRelativeNow}
              </p>
            </div>

            <div className="text-14 flex flex-col ">
              <ButtonEnviarProposta />
              <p className="text-gray-300 flex justify-between w-full ">
                <span> Prazo Final:</span>
                <span className="text-gray_100">
                  {projectById.deadLine
                    ? format(new Date(projectById.deadLine), "dd/MM/yyyy")
                    : "Prazo não informado"}
                </span>
              </p>
            </div>
          </div>
          <Separator className="bg-gray_400 mt-6" />

          <div className="py-6 text-gray_200 text-16">
            <p>{projectById.description}</p>
            <Separator className="bg-gray_400 mt-6" />
          </div>

          <div className="text-gray_300 text-12">
            <h2 className="pb-4">Publicado por</h2>
            <div className="flex items-center gap-4 text-14">
              <img src={images.Avatar2} />
              <p>{projectById.name}</p>
            </div>
          </div>
        </div>

        {/* max-w-[448px] */}
        <div className="bg-gray_600 gap-10 p-10 rounded-[10px] ml-10 max-[1380px]:p-5 max-[1330px]:max-w-[728px] max-[1330px]:w-full max-[1330px]:m-0 min-[320px]:p-5 ">
          <div className="mx-10 my-4 flex flex-col min-[320px]:mx-1 min-[320px]:my-1">
            <h1 className="flex justify-center items-center text-20 max-[1330px]:text-2xl">
              Outros projetos de {projectById.name}
            </h1>
            <Separator className="bg-gray_400 mt-6" />

            {projectById.otherProject.map((project) => (
              <div
                key={project.id}
                className="flex  items-center py-6 max-[1380px]:text-12 max-[1380px]:justify-start max-[1380px]:gap-4 min-[768px]:justify-between"
              >
                <span
                  className={`rounded-full min-w-[32px] size-8 ${getRandomGradient()} text-16 mr-2`}
                />
                <div className="min-[320px]:flex min-[320px]:flex-col flex-grow">
                  <h3 className="min-[320px]:text-14 text-ellipsis overflow-hidden whitespace-nowrap max-w-60">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-12 min-[320px]:text-12 max-[1330px]:text-16">
                    Prazo Final: {format(project.deadLine, "dd/MM/yyyy")}
                  </p>
                </div>
                <NavLink to={`/${project.id}/projetosFreelancer`}>
                  <ArrowUpRight className="bg-gray_500 size-8 rounded-full p-2 ml-10 hover:bg-gray_700 min-[320px]:hidden min-[768px]:flex" />
                </NavLink>
              </div>
            ))}

            <Button onClick={handleViewAllUserProjects} className="flex item-center justify-center rounded-md p-3 text-14 bg-gray_500 mt-auto hover:bg-gray_700">
              Ver todos os projetos
            </Button>
          </div>
        </div>
      </div>
    );
  }