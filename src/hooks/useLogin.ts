import { FreelancerService } from "@/services/freelancerServices";
import { IBaseResponse } from "@/types/api";
import { ILoginResponse } from "@/types/login";
import { useState } from "react";

export function useLogin(){

    const [login, setLogin] = useState<IBaseResponse<ILoginResponse>>();

    const sentLogin = async (email: string, password: string) => {
        const response = await FreelancerService.sendLogin(email, password);
        setLogin(response);

        if (!response.data || !response.data.token) {
            throw new Error(response.message || 'Credenciais inválidas.');
        }

        localStorage.setItem("authToken", response.data.token);

        console.log("user", response.data);
        return response.data;
    }


    const createAccount = async (name: string, email: string, password: string, type: "Freelancer" | "Customer") => {
        const response = await FreelancerService.createAccount(name, email, password, type);

        if (!response.data) {
            throw new Error(response.message || 'Erro ao criar conta.');
        }   
        return response.data;
    }

    return {
        sentLogin,
        createAccount,
    }
}