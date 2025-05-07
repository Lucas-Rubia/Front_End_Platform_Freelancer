import { FreelancerService } from "@/services/freelancerServices";
import { IContract } from "@/types/contract";
import { useEffect, useState } from "react";

export function useContract(){
    
  const [contract, setContract] = useState<IContract[]>([]);
  
  const fetchcontract = async () => {
    const response = await FreelancerService.fetchAllContract(23);
    setContract(response.data)
  }

  useEffect(() => {
    fetchcontract();
  }, []);


  return {
    contract,
  }
}