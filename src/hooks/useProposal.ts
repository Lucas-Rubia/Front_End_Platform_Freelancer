import { FreelancerService } from "@/services/freelancerServices";
import { IBaseResponse } from "@/types/api";
import { IProposal, IProposalRequest, IUpdateStatusProposal } from "@/types/proposals";
import { useCallback, useState } from "react";
import { usePagination } from "./usePagination";

export function useProposal(){
    
  const [proposal, setProposal] = useState<IProposal[]>([]);
  const [proposalUnique, setProposalUnique] = useState<IBaseResponse<IProposalRequest>>();
  const [statusProposal, setStatusProposal] = useState<IBaseResponse<IUpdateStatusProposal>>();

  const {pagination, setPage, setPageSize, setPagination} = usePagination();
  const {currentPage,pageSize} = pagination

  const fetchProposal = useCallback(async () => {
    const response = await FreelancerService.fetchAllProposal(12, currentPage, pageSize);
    setProposal(response.data)
    setPagination(response.pagination)
  },[currentPage, pageSize])


  const sendProposalUnique = async(projectID: number, freelancerId: number, proposedValue: number, message: string, status: number) => {
    const response = await FreelancerService.sendProposal(projectID, freelancerId, proposedValue, message, status);
    setProposalUnique(response);}


  const updateStatusProposal = async(id: number, status: number) => {
    const response = await FreelancerService.updadeStatusProposal(id, status);
    setStatusProposal(response);
    
    const currentProposal = proposal.find((p) => p.id === id);
    if (currentProposal) {
      currentProposal.status = response.data.status;
      setProposal((prev) => prev.map((p) => (p.id === id ? currentProposal : p)));
    }

  } 

  return {
    proposal,
    pagination,
    setPagination,
    setPageSize,
    setPage,
    setProposal,
    fetchProposal,
    sendProposalUnique,
    updateStatusProposal
  }
}