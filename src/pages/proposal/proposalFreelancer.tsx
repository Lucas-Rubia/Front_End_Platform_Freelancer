import { Pagination } from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@/components/ui/table";
import { EBaseStatus } from "@/enum/baseStatus";
import { useProposal } from "@/hooks/useProposal";
import { Frown } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function ProposalFreelancer() {
  
 const user: 'client' | 'freelancer' = "freelancer"; 

  const [proposalStatus, setProposalStatus] = useState<{ [key: number]: 'accepted' | 'denied' }>({});

  const handleAcceptProposal = (e: React.MouseEvent, proposalId: number) => {
    e.stopPropagation(); 
    setProposalStatus(prevStatuses => ({
      ...prevStatuses,
      [proposalId]: 'accepted'
    }));}

    const handleDenyProposal = (e: React.MouseEvent, proposalId: number) => {
    e.stopPropagation(); 
    setProposalStatus(prevStatuses => ({
      ...prevStatuses,
      [proposalId]: 'denied'
    }));}


  const navigate = useNavigate(); 

    const handleRowClick = (idProject:Number) => {
    navigate(`/${idProject}/projetosFreelancer`);
    
    
  };

const {proposal, pagination, setPage, fetchProposal } = useProposal();

  useEffect(() => {
    fetchProposal();
  }, [fetchProposal]);

    if(proposal.length === 0) return (
         <div className="flex flex-col justify-center p-4 text-center  items-center" style={{ height: "calc(100vh - 82px)" }}>
      <h1 className="text-lg mb-4 min-[768px]:text-2xl">
        Lamentamos, mas não encontramos nenhuma proposta
      </h1>
      <Frown className="size-5 min-[768px]:size-8" />
    </div>
  )

  return (
    <main className="px-28 pb-20 py-10 max-[768px]:px-10">
      <div className="flex text-sm justify-center mb-10">
        <h1 className="uppercase text-[28px] leading-normal">
          Todas as Propostas
        </h1>
      </div>

      <Table className="w-full">
        <TableBody>
          {proposal?.map((proposal) => (
            <TableRow
              key={proposal.id}
              onClick={() => handleRowClick(proposal.idProject)}
              className="flex flex-wrap items-center justify-between w-full hover:bg-gray_600 rounded-md p-2 cursor-pointer"
            >
              <TableCell className="shrink-0 w-full sm:w-auto">
                {user === "client" && (
                  <Checkbox
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                )}
              </TableCell>
              <TableCell className="shrink-0 min-w-[200px] max-w-[200px] sm:w-auto font-semibold truncate rounded-md">
                {proposal.titleProject}
              </TableCell>
              <TableCell className="w-full sm:flex-1 sm:min-w-0 sm:max-w-[680px] line-clamp-2">
                <span className="line-clamp-2">{proposal.message}</span>
              </TableCell>
              <TableCell className="w-full sm:flex-1 sm:text-center sm:min-w-0 sm:max-w-[300px] line-clamp-2">
                <span className="line-clamp-2">
                  R$ {proposal.proposedValue.toFixed(2)}
                </span>
              </TableCell>
              {user === "client" ? (
                <TableCell className="shrink-0 min-w-[120px] gap-2 flex sm:w-auto">
                  <span
                    className={`rounded-full size-4 ${
                      proposal.status === EBaseStatus.ACCEPT
                        ? "bg-green-500"
                        : proposal.status === EBaseStatus.CANCELED
                        ? "bg-red-500"
                        : proposal.status === EBaseStatus.PENDING
                        ? "bg-orange-500"
                        : "Error"
                    } shrink-0`}
                  />
                  <p>
                    {proposal.status === EBaseStatus.ACCEPT
                      ? "Aceito"
                      : proposal.status === EBaseStatus.CANCELED
                      ? "Cancelado"
                      : proposal.status === EBaseStatus.PENDING
                      ? "Pendente"
                      : "Erro"}
                  </p>
                </TableCell>
              ) : (
                <TableCell className="shrink-0 w-full gap-2 flex sm:w-auto">
                  {proposalStatus[proposal.id] === "accepted" ? (
                    <p className="text-green-500 font-semibold">
                      Proposta Aceita
                    </p>
                  ) : proposalStatus[proposal.id] === "denied" ? (

                    <p className="text-red-500 font-semibold">
                      Proposta Recusada
                    </p>
                  ) : (
                    <>
                      <Button
                        onClick={(e) => handleAcceptProposal(e, proposal.id)}
                        className="bg-green-500 hover:bg-green-600 w-20" 
                      >
                        Accept
                      </Button>
                      <Button
                        onClick={(e) => handleDenyProposal(e, proposal.id)}
                        className="bg-red-500 hover:bg-red-600 w-20"
                      >
                        Denied
                      </Button>
                    </>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator className="bg-gray-300" />
      <Pagination pagination={pagination} setPage={setPage} />
    </main>
  );
}