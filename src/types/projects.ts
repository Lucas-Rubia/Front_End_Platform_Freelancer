export interface IProject{
    id: number;
    title: string;
    deadLine: string;
    description: string;
    createdAt: string;
    userId? : number;
    bugdet: number;
}

export interface IProjectUnique extends Omit<IProject, "userId"> {
    name: string;
    userId? : number
    otherProject:OtherProject[];
}

export interface OtherProject{
    id: number;
      title: string;
      deadLine: string;
}
