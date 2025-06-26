export interface ILogin {
  email: string;
  password: string;}


export interface ILoginResponse {
    name: string;
    userType: number;
    token: string;}