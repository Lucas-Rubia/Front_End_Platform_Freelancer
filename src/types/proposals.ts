import { EBaseStatus } from "@/enum/baseStatus";

export interface IProposal{
    id: number;
    proposedValue: number;
    message: string;
    status: EBaseStatus;
    titleProject: string,
    idProject:number
}