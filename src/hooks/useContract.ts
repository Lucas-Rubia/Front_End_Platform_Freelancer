import { FreelancerService } from "@/services/freelancerServices";
import { IContract } from "@/types/contract";
import { useCallback, useState } from "react";
import { usePagination } from "./usePagination";

export function useContract(){
    
  const [contract, setContract] = useState<IContract[]>([]);
  const {pagination, setPage, setPageSize, setPagination} = usePagination();
  const {currentPage, pageSize} = pagination
  
  const fetchcontract = useCallback(async () => {
    const response = await FreelancerService.fetchAllContract(23, currentPage, pageSize);
    setContract(response.data)
    setPagination(response.pagination)
  },[currentPage, pageSize])

  return {
    contract,
    pagination,
    setPagination,
    setPageSize,
    setPage,
    fetchcontract,
  }
}