import { EBaseStatus } from "@/enum/baseStatus";

export interface IProposal{
    id: number;
    proposedValue: number;
    message: string;
    status: EBaseStatus;
    titleProject: string,
    idProject:number
}

export interface IProposalUnique {
  projectID: number;
  freelancerId: number;
  proposedValue: number;
  message: string;
  status: number;
}

export interface IProposalRequest{
    proposedValue: number,
    message: string,
    status: number
}