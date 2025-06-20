import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ValidationCreateAccount, validationCreateAccount } from "@/Schemas/validationProfile";
import { images } from "@/utils/imagem";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleUserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";


export function CreateAccount() {
    const form = useForm<ValidationCreateAccount>({
      resolver: zodResolver(validationCreateAccount),
      defaultValues: {
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        type: "Freelancer",
      },
    });

    const navigate = useNavigate();

    async function onSubmit(data: ValidationCreateAccount) {
      console.log("Dados validos com sucesso", data);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast.success("Conta criada com sucesso!", {
          description: "Você já pode fazer login na sua conta.",
        });
        
        navigate("/signup");
        
        
      } catch (error) {
        console.error("Erro ao criar a conta:", error);
        toast.error("Ops! Algo deu errado.", {
          description: "Não foi possível criar sua conta. Tente novamente.",
        });
      }
    };
      
    return (
      <div className="mx-8 flex flex-col justify-center items-center h-screen md:flex-row md:gap-4">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <img
            src={images.LogoFreelancer}
            alt="Logo do Plataforma"
            className="lg:size-16 min-[1440px]:size-20 "
          />
          <h1 className="text-2xl lg:text-4xl min-[1440px]:mr-4">
            FreelancerServer
          </h1>
        </div>

        <div className="flex flex-col gap-8 justify-center items-center text-xs md:flex-row md:gap-10">
          <Separator
            orientation={"vertical"}
            className="hidden md:flex bg-gray-300 h-72"
          />
          <div className="flex flex-col gap-4 justify-center items-center">
            <CircleUserRound
              size={40}
              className="hidden md:flex lg:size-14 min-[1440px]:size-16"
            />
            <h1 className="text-lg">Crie sua conta! </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 justify-center max-w-[600px]"
              >
                <div className="flex flex-col gap-4 md:flex-row ">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormControl>
                          <Input
                            placeholder="Nome"
                            {...field}
                            className="bg-transparent max-w-[250px] lg:text-lg min-[1440px]:w-96 min-[1440px]:text-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sobrenome"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="sobrenome"
                            {...field}
                            className="bg-transparent max-w-[250px] lg:text-lg min-[1440px]:w-96 min-[1440px]:text-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email"
                          {...field}
                          className="bg-transparent lg:text-lg min-[1440px]:text-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="senha"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Senha"
                          type="password"
                          {...field}
                          className="bg-transparent lg:text-lg min-[1440px]:text-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <h1 className="text-lg text-center">O que você deseja ser? </h1>

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col items-center gap-4 md:flex-row"
                        >
                          <FormItem className="flex items-center gap-2 p-2 rounded-lg border border-gray_600 w-full [&:has([role=radio][data-state=checked])]:bg-green-500">
                            <FormControl>
                              <RadioGroupItem value="Freelancer" />
                            </FormControl>
                            <FormLabel className="!m-0 text-base w-full md:text-sm">
                              Freelancer
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-2 p-2 rounded-lg border border-gray_600 w-full [&:has([role=radio][data-state=checked])]:bg-green-500">
                            <FormControl>
                              <RadioGroupItem value="Customer" />
                            </FormControl>
                            <FormLabel className="!m-0 text-base w-full md:text-sm">
                              Customer
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="bg-blue-500 text-white hover:bg-blue-600 w-full lg:text-lg min-[1440px]:text-xl"
                >
                  Criar Conta
                </Button>
              </form>
            </Form>
            <NavLink to="/signup">
              <p className="lg:text-lg min-[1440px]:text-xl">
                Já possue conta?
                <span className="text-blue-500 hover:underline ml-1">
                  SingUp
                </span>
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    );
}