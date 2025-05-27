export interface IBaseResponse<T> {
    data: T;
    message: string | null;
}
export interface IPagination {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
}
export interface IBasePagedResponse<T> extends IBaseResponse<T> {
    pagination: IPagination;
}

export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE_NUMBER = 1;
