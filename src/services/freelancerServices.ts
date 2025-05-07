import { apiFreelance } from "@/lib/axios";
import { IBasePagedResponse } from "@/types/api";
import { IContract } from "@/types/contract";
import { IProject } from "@/types/projects";
import { IProposal } from "@/types/proposals";

async function fetchAllProjects(userID:number): Promise<IBasePagedResponse<IProject[]>> {
    return (await apiFreelance.get<IBasePagedResponse<IProject[]>>(`/project/${userID}`)).data
}

async function fetchAllProposal(userID:number){
    return (await apiFreelance.get<IBasePagedResponse<IProposal[]>>(`/proposal/${userID}`)).data
}

async function fetchAllContract(userID:number){
  return (await apiFreelance.get<IBasePagedResponse<IContract[]>>(`/contract/${userID}`)).data
}

export const FreelancerService = {
  fetchAllProjects,
  fetchAllProposal,
  fetchAllContract,
}; 