import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { validationNameUpdate, validationPasswordUpdate, validationUpdateProfile, ValidationUpdateProfile } from "@/Schemas/validationProfile";
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


  function handleSave(data: ValidationUpdateProfile) {

  let isFormValid = true;

  if (isNameEditable) {
    const nameValidationResult = validationNameUpdate.safeParse(data);
    if (!nameValidationResult.success) {
      isFormValid = false;
      
      nameValidationResult.error.issues.forEach((issue) => {
        form.setError(issue.path[0] as keyof ValidationUpdateProfile, {
          type: "manual",
          message: issue.message,
        });
      });
    }
  }

  if (isPasswordEditable) {
    const passwordValidationResult = validationPasswordUpdate.safeParse(data);
    if (!passwordValidationResult.success) {
      isFormValid = false;

       passwordValidationResult.error.issues.forEach((issue) => {
        form.setError(issue.path[0] as keyof ValidationUpdateProfile, {
          type: "manual",
          message: issue.message,
        });
      });
    }
  }
  

   if (isFormValid) try {
    toast("SUCESSO ", {
              description: "Alterações no perfil realizadas com sucesso",
            });
            setIsNameEditable(false);
            setIsPasswordEditable(false);
          } catch (error) {
            console.error("Falha ao enviar proposta:", error);
            toast.error("Erro ao enviar proposta", {
              description:
                "Ocorreu um problema. Por favor, tente novamente mais tarde.",
            });
            
          }
          console.log(data);
        }
      

   const form = useForm<ValidationUpdateProfile>({
    resolver: zodResolver(validationUpdateProfile),
    defaultValues: {
      nome: "Lucas",
      sobrenome: "Rubia",
      senha: "",
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
         onSubmit={form.handleSubmit(handleSave)}
         className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-6"
       >
         <FormField
           control={form.control}
           name="nome"
           render={({ field }) => (
             <FormItem>
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

         <FormField
           control={form.control}
           name="sobrenome"
           render={({ field }) => (
             <FormItem>
               <div className="flex justify-between items-center">
                 <FormLabel>Sobrenome</FormLabel>
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
                   placeholder="Rubia"
                   {...field}
                 />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="email"
           render={({ field }) => (
             <FormItem>
               <div className="flex justify-between items-center">
                 <FormLabel>Email</FormLabel>
                 <div className="w-10 h-10" />
               </div>
               <FormControl>
                 <Input disabled placeholder="lu*****@gmail.com" {...field} />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

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