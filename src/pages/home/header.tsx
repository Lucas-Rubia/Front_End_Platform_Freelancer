import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useProjects } from "@/hooks/useProjects";
import { images } from "@/utils/imagem";
import { MenuIcon } from "lucide-react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export function Header(){
const {fetchProjects } = useProjects();

useEffect(() => {
  fetchProjects();
}, [fetchProjects]);

 const logoClick = () => {
    fetchProjects();
  };


    return (
      <div className="bg-gray_700">
        <div className="grid grid-cols-12 items-center  py-5 max-[1240px]:flex max-[1240px]:justify-between min-[320px]:px-14">
          <div className="flex gap-2 items-center col-span-3">
            <NavLink to="/"
            onClick={logoClick} className="flex items-center gap-2 ">
              <img src={images.LogoFreelancer} alt="LogoFreelancer" />
              <h1 className="font-bold text-white text-xl max-[425px]:hidden">
                FreelancerServer
              </h1>
            </NavLink>
          </div>

          <div className="flex justify-center gap-6 text-16 text-gray_300 col-span-6 max-[768px]:hidden">
            <NavLink to="/">
              <Button
                variant="ghost"
                className=" hover:bg-transparent border-b-2 border-transparent hover:border-white hover:text-gray_300"
              >
                Projetos
              </Button>
            </NavLink>

            <NavLink to="/proposalFreelancer">
              <Button
                variant="ghost"
                className=" hover:bg-transparent border-b-2 border-transparent hover:border-white hover:text-gray_300"
              >
                Propostas
              </Button>
            </NavLink>
            <NavLink to="/contractFreelancer">
              <Button
                variant="ghost"
                className=" hover:bg-transparent border-b-2 border-transparent hover:border-white hover:text-gray_300"
              >
                Contratos
              </Button>
            </NavLink>
          </div>

          <div className="flex items-center justify-end gap-1 col-span-3 max-[1240px]:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img
                  className="size-10 cursor-pointer "
                  src={images.Avatar}
                  alt="AvatarProfile"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-gray_700 text-gray_200 border-gray_600 "
              >
                <DropdownMenuLabel>Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>SignOut</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden max-[1240px]:flex max-[1240px]:items-center max-[1240px]:justify-end max-[1240px]:gap-1 max-[1240px]:col-span-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MenuIcon className="stroke-gray_200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-gray_700 text-gray_200 border-gray_600 "
              >
                <DropdownMenuLabel>Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <NavLink to="/projetosFreelancer">
                  <DropdownMenuItem>Projetos</DropdownMenuItem>
                </NavLink>
                <NavLink to="/proposalFreelancer">
                  <DropdownMenuItem>Propostas</DropdownMenuItem>
                </NavLink>
                <NavLink to="/contractFreelancer">
                  <DropdownMenuItem>Contratos</DropdownMenuItem>
                </NavLink>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>SignOut</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Separator className="bg-gray_600" />
      </div>
    );
}