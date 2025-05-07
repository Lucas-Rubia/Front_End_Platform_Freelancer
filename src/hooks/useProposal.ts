import { FreelancerService } from "@/services/freelancerServices";
import { IProposal } from "@/types/proposals";
import { useEffect, useState } from "react";

export function useProposal(){
    
  const [proposal, setProposal] = useState<IProposal[]>([]);

  const fetchProposal = async () => {
    const response = await FreelancerService.fetchAllProposal(13);
    setProposal(response.data)
  }

  useEffect(() => {
    fetchProposal();
  }, []);


  return {
    proposal,

  }
}