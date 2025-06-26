import { FreelancerService } from "@/services/freelancerServices";
import { IBaseResponse } from "@/types/api";
import { ILoginResponse } from "@/types/login";
import { useState } from "react";

export function useLogin(){

    const [login, setLogin] = useState<IBaseResponse<ILoginResponse>>();

    const sentLogin = async (email: string, password: string) => {
        const response = await FreelancerService.sendLogin(email, password);
        setLogin(response);
        if (!response.data) {
            throw new Error(response.message || 'Credenciais inválidas.');
        }
    return response.data;
    }

    return {
        sentLogin,
    }
}