import { FreelancerService } from "@/services/freelancerServices";
import { IBaseResponse } from "@/types/api";
import { IProposal, IProposalRequest } from "@/types/proposals";
import { useCallback, useState } from "react";
import { usePagination } from "./usePagination";

export function useProposal(){
    
  const [proposal, setProposal] = useState<IProposal[]>([]);
  const [proposalUnique, setProposalUnique] = useState<IBaseResponse<IProposalRequest>>();

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

  return {
    proposal,
    pagination,
    setPagination,
    setPageSize,
    setPage,
    fetchProposal,
    sendProposalUnique,
  }
}