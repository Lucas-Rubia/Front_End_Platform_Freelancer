import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLogin } from "@/hooks/useLogin";
import { images } from "@/utils/imagem";
import { CircleUserRound } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export function SignUp() {

  const navigate = useNavigate();
  const {sentLogin} = useLogin();
    const [error, setError] = useState<string | null>(null);


  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleLogin = async (email:string, password:string) => {
    try {
      await sentLogin(email, password);
      navigate("/home", { replace: true });

    } catch (err: any) {
      setError("Credenciais inválidas."); 
    }
  };


    return (
      <div className="flex flex-col gap-10 justify-center items-center h-screen md:flex-row md:gap-20">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <img
            src={images.LogoFreelancer}
            alt="Logo do Plataforma"
            className="lg:size-16 min-[1440px]:size-20"
          />
          <h1 className="text-2xl lg:text-4xl">FreelancerServer</h1>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center text-xs md:flex-row md:gap-20">
          <Separator
            orientation={"vertical"}
            className="hidden md:flex bg-gray-300 h-52"
          />
          <div className="flex flex-col gap-4 justify-center items-center">
            <CircleUserRound
              size={40}
              className="hidden md:flex lg:size-14 min-[1440px]:size-16"
            />
            {error && (
            <p className="text-sm text-red-500 bg-gray_600 p-2 rounded-md w-full text-center">
              {error}
            </p>
        )}
            <Input
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent lg:w-80 lg:text-lg min-[1440px]:w-96 min-[1440px]:text-xl"
            />
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent lg:text-lg min-[1440px]:text-xl"
            />
            <Button 
            onClick={() => handleLogin(email, password)}
            className="bg-blue-500 text-white hover:bg-blue-600 w-full lg:text-lg min-[1440px]:text-xl">
              Login
            </Button>
            <p className="hover:underline lg:text-lg min-[1440px]:text-xl">
              Esqueceu Senha
            </p>
            <NavLink
              to="/createAccount"
              className="lg:text-lg min-[1440px]:text-xl"
            >
              <p>
                Não possue conta?
                <span className="text-blue-500 hover:underline ml-1">
                  Criar Conta
                </span>
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    );
}