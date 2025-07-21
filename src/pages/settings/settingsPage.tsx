import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { validationUpdateProfile, ValidationUpdateProfile } from "@/Schemas/validationProfile";
import { images } from "@/utils/imagem";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Pencil } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function SettingPage(){

  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);

  const handleToggleName = () => setIsNameEditable((prev) => !prev);
  const handleTogglePassword = () => setIsPasswordEditable((prev) => !prev);

  
async function onSubmit(data: ValidationUpdateProfile) {
      console.log("Dados validos com sucesso", data);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast.success("SUCESSO", {
          description: "Dados do Perfil atualizados com sucesso.",
        });
        
      } catch (error) {
        console.error("Erro ao ao atualizar perfil:", error);
        toast.error("Ops! Algo deu errado.", {
          description: "Não foi possível atualizar o perfil. Tente novamente.",
        });
      }
    };


   const form = useForm<ValidationUpdateProfile>({
    resolver: zodResolver(validationUpdateProfile),
    defaultValues: {
      nome: "Lucas",
      sobrenome: "Rubia",
      senha: "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    },
  });


 return (
   <div className="flex flex-col justify-center items-center mt-10 gap-4 px-4 lg:h-[calc(100vh-2rem)]">
     <img
       src={images.Avatar}
       alt="Foto de Perfil"
       className="size-16 lg:size-24 rounded-full"
     />
     <h1 className="text-xl lg:text-2xl">Perfil</h1>

     <Form {...form}>
       <form
         onSubmit={form.handleSubmit(onSubmit)}
         className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-6"
       >
         <FormField
           control={form.control}
           name="nome"
           render={({ field }) => (
             <FormItem className="md:col-span-2 md:mt-4 md:flex md:justify-center md:flex-col">
               <div className="flex justify-between items-center">
                 <FormLabel>Nome</FormLabel>
                 <Button
                   type="button"
                   variant="ghost"
                   size="icon"
                   onClick={handleToggleName}
                 >
                   {isNameEditable ? <Check size={18} /> : <Pencil size={18} />}
                 </Button>
               </div>
               <FormControl>
                 <Input
                   disabled={!isNameEditable}
                   placeholder="Lucas"
                   {...field}
                 />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <div className=" md:grid md:grid-cols-2 gap-y-4 md:gap-x-6 md:col-span-2 md:items-baseline">
           <div>
             <FormLabel
               className="flex justify-between items-center mb-5"
               htmlFor="email"
             >
               Email
             </FormLabel>
             <Input
               id="email"
               disabled
               autoComplete="off"
               placeholder="lu*****@gmail.com"
             />
           </div>

           <FormField
             control={form.control}
             name="senha"
             render={({ field }) => (
               <FormItem>
                 <div className="flex justify-between items-center">
                   <FormLabel>Senha</FormLabel>
                   <Button
                     type="button"
                     variant="ghost"
                     size="icon"
                     onClick={handleTogglePassword}
                   >
                     {isPasswordEditable ? (
                       <Check size={18} />
                     ) : (
                       <Pencil size={18} />
                     )}
                   </Button>
                 </div>
                 <FormControl>
                   <Input
                     disabled={!isPasswordEditable}
                     type="password"
                     placeholder="••••••••••••••••"
                     {...field}
                   />
                 </FormControl>
                 <FormMessage />
               </FormItem>
             )}
           />
         </div>

         <div className="md:col-span-2 mt-4 flex justify-center">
           <Button
             type="submit"
             disabled={!isNameEditable && !isPasswordEditable}
             className="bg-gray_600 text-white hover:bg-gray_400 px-12"
           >
             Salvar Alterações
           </Button>
         </div>
       </form>
     </Form>

     <div className="flex flex-col gap-4 justify-center my-4">
       <h1 className="text-xl lg:text-2xl">Tipo de Usuario</h1>
       <p className="bg-blue-500 rounded-sm text-center text-lg p-1 lg:text-xl">
         Freelancer
       </p>
     </div>

     <p>
       Ler as politicas e
       <span className="text-blue-500 hover:underline ml-1 cursor-pointer">
         termos de serviço
       </span>
     </p>
   </div>
 );
}