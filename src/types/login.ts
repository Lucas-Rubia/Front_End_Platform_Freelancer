export interface ILogin {
  email: string;
  password: string;}


export interface ILoginResponse {
    name: string;
    userType: number;
    token: string;}


export interface ICreateAccount {
  name: string;
  email: string;
  password: string;
  type: "Freelancer" | "Customer";
}