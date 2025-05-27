import { FreelancerService } from "@/services/freelancerServices";
import { IProposal } from "@/types/proposals";
import { useCallback, useState } from "react";
import { usePagination } from "./usePagination";

export function useProposal(){
    
  const [proposal, setProposal] = useState<IProposal[]>([]);
  const [proposalById, setProposalById] = useState<IProposal | undefined>(undefined)

  const {pagination, setPage, setPageSize, setPagination} = usePagination();
  const {currentPage,pageSize} = pagination

  const fetchProposal = useCallback(async () => {
    const response = await FreelancerService.fetchAllProposal(13, currentPage, pageSize);
    setProposal(response.data)
    setPagination(response.pagination)
  },[currentPage, pageSize])


  return {
    proposal,
    pagination,
    setPagination,
    setPageSize,
    setPage,
    fetchProposal,


  }
}