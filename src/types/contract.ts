import { EBaseStatus } from "@/enum/baseStatus";

export interface IContract {
    id: number;
    startDate: string;
    endDate: string;
    titleProject: string;
    subcriptionProject: string;
    status: EBaseStatus;
    idProject: number;
}