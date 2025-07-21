import { apiFreelance } from "@/lib/axios";
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE, IBasePagedResponse, IBaseResponse } from "@/types/api";
import { IContract } from "@/types/contract";
import { ICreateAccount, ILogin, ILoginResponse } from "@/types/login";
import { IProject, IProjectUnique } from "@/types/projects";
import { IProposal, IProposalRequest, IProposalUnique, IUpdateStatusProposal } from "@/types/proposals";

// Login related functions
async function sendLogin(email:string, password:string): Promise<IBaseResponse<ILoginResponse>>{
   const url = '/Auth/Login';
   const requestBody: ILogin = {
    email,
    password
  };

  const response = await apiFreelance.post<IBaseResponse<ILoginResponse>>(url, requestBody);

  return response.data;
}


// Project related functions

async function fetchAllProjects(pageNumber=DEFAULT_PAGE_NUMBER, pageSize=DEFAULT_PAGE_SIZE): Promise<IBasePagedResponse<IProject[]>> {
  return (await apiFreelance.get<IBasePagedResponse<IProject[]>>(`/Project/?pageNumber=${pageNumber}&pageSize=${pageSize}`)).data;
}

async function fetchProjectsFromUser(userID:number, pageNumber=DEFAULT_PAGE_NUMBER, pageSize=DEFAULT_PAGE_SIZE): Promise<IBasePagedResponse<IProject[]>> {
  return (await apiFreelance.get<IBasePagedResponse<IProject[]>>(`/Project/${userID}?pageNumber=${pageNumber}&pageSize=${pageSize}`)).data;
}

async function fetchProjectById(projectID: number): Promise<IBaseResponse<IProjectUnique>> {
  return (await apiFreelance.get<IBaseResponse<IProjectUnique>>(`/Project/details/${projectID}`)).data;
}



// Proposal related functions
async function fetchAllProposal(userID:number, pageNumber=DEFAULT_PAGE_NUMBER, pageSize=DEFAULT_PAGE_SIZE): Promise<IBasePagedResponse<IProposal[]>>{
    return (await apiFreelance.get<IBasePagedResponse<IProposal[]>>(`/proposal/${userID}?pageNumber=${pageNumber}&pageSize=${pageSize}`)).data
}


async function sendProposal(projectID: number, freelancerId: number, proposedValue: number, message: string, status: number): Promise<IBaseResponse<IProposalRequest>>{
   const url = '/Proposal'; 
   const requestBody:IProposalUnique = {
    projectID,
    freelancerId,
    proposedValue,
    message,
    status
  };

  const response = await apiFreelance.post<IBaseResponse<IProposalRequest>>(url, requestBody);

  return response.data;
}

async function updadeStatusProposal(id:number, status:number): Promise<IBaseResponse<IUpdateStatusProposal>>{
  const url = '/Proposal';
  const sendBody:IUpdateStatusProposal ={
    proposalID: id,
    status
  };

  const response = await apiFreelance.patch<IBaseResponse<IUpdateStatusProposal>>(url, sendBody);

  return response.data;
}



// Contract related functions
async function fetchAllContract(userID:number, pageNumber=DEFAULT_PAGE_NUMBER, pageSize=DEFAULT_PAGE_SIZE):Promise<IBasePagedResponse<IContract[]>>{
  return (await apiFreelance.get<IBasePagedResponse<IContract[]>>(`/contract/${userID}?pageNumber=${pageNumber}&pageSize=${pageSize}`)).data
}



// SingUp related functions
async function createAccount(name:string, email:string, password:string, type: ICreateAccount["type"]): Promise<IBaseResponse<ICreateAccount>> {
  const url = '/Auth'; 
   const requestBody:ICreateAccount = {
    name,
    email,
    password,
    type

  };
 
 const response = await apiFreelance.post<IBaseResponse<ICreateAccount>>(url, requestBody);
 return response.data;
 
}



export const FreelancerService = {
  fetchAllProjects,
  fetchAllProposal,
  fetchAllContract,
  fetchProjectById,
  fetchProjectsFromUser,
  sendProposal,
  updadeStatusProposal,
  sendLogin,
  createAccount,
}; 