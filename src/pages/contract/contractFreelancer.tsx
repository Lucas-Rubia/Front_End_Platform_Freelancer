
import { getRandomGradient } from "@/components/get-random-gradient";
import { Pagination } from "@/components/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { EBaseStatus } from "@/enum/baseStatus";
import { useContract } from "@/hooks/useContract";
import { images } from "@/utils/imagem";
import { ArrowRight, Frown } from "lucide-react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";



export function ContractFreelancer(){

  const {contract, pagination, setPage, fetchcontract} = useContract();

    useEffect(() => {
    fetchcontract();
  }, [fetchcontract]);

      if(contract.length === 0) return (
      <div className="flex flex-col justify-center p-4 text-center  items-center" style={{ height: "calc(100vh - 82px)" }}>
      <h1 className="text-lg mb-4 min-[768px]:text-2xl">
        Lamentamos, mas não encontramos nenhum contrato
      </h1>
      <Frown className="size-5 min-[768px]:size-8" />
    </div>
  )


    return (
      <div className="px-28 pb-20 py-10 max-[768px]:px-10">
        <div className="flex text-sm justify-center mb-10">
          <h1 className="uppercase text-[28px] text-center leading-8">
            Todos os seus contratos
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-5 max-w-[1000px] mx-auto max-[1024px]:grid-cols-1">
          {contract.map((contract) => (
            <NavLink
              key={contract.id}
              to={`/${contract.idProject}/projetosFreelancer`}
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
                      <p>
                        {contract.status === EBaseStatus.ACCEPT
                          ? "Aceito"
                          : contract.status === EBaseStatus.CANCELED
                          ? "Cancelado"
                          : contract.status === EBaseStatus.PENDING
                          ? "Pendente"
                          : "Erro"}
                      </p>
                    </div>
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