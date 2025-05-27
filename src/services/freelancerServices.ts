import { apiFreelance } from "@/lib/axios";
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE, IBasePagedResponse, IBaseResponse } from "@/types/api";
import { IContract } from "@/types/contract";
import { IProject, IProjectUnique } from "@/types/projects";
import { IProposal } from "@/types/proposals";

async function fetchAllProjects(pageNumber=DEFAULT_PAGE_NUMBER, pageSize=DEFAULT_PAGE_SIZE): Promise<IBasePagedResponse<IProject[]>> {
  return (await apiFreelance.get<IBasePagedResponse<IProject[]>>(`/Project/?pageNumber=${pageNumber}&pageSize=${pageSize}`)).data;
}

async function fetchProjectsFromUser(userID:number, pageNumber=DEFAULT_PAGE_NUMBER, pageSize=DEFAULT_PAGE_SIZE): Promise<IBasePagedResponse<IProject[]>> {
  return (await apiFreelance.get<IBasePagedResponse<IProject[]>>(`/Project/${userID}?pageNumber=${pageNumber}&pageSize=${pageSize}`)).data;
}

async function fetchProjectById(projectID: number): Promise<IBaseResponse<IProjectUnique>> {
  return (await apiFreelance.get<IBaseResponse<IProjectUnique>>(`/Project/details/${projectID}`)).data;
}

async function fetchAllProposal(userID:number, pageNumber=DEFAULT_PAGE_NUMBER, pageSize=DEFAULT_PAGE_SIZE): Promise<IBasePagedResponse<IProposal[]>>{
    return (await apiFreelance.get<IBasePagedResponse<IProposal[]>>(`/proposal/${userID}?pageNumber=${pageNumber}&pageSize=${pageSize}`)).data
}

async function fetchAllContract(userID:number, pageNumber=DEFAULT_PAGE_NUMBER, pageSize=DEFAULT_PAGE_SIZE):Promise<IBasePagedResponse<IContract[]>>{
  return (await apiFreelance.get<IBasePagedResponse<IContract[]>>(`/contract/${userID}?pageNumber=${pageNumber}&pageSize=${pageSize}`)).data
}

export const FreelancerService = {
  fetchAllProjects,
  fetchAllProposal,
  fetchAllContract,
  fetchProjectById,
  fetchProjectsFromUser
}; 