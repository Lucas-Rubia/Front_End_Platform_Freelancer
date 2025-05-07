export interface IBaseResponse<T> {
    data: T;
    message: string | null;
}

export interface IBasePagedResponse<T> extends IBaseResponse<T> {
    currentPage:number;
    pageSize:number;
    totalPages:number;
    totalCount:number;
}