import { z } from "zod";

export const validationCreateAccount = z.object({
  nome:z.string(). nonempty("Nome é obrigatório"),
  sobrenome: z.string().nonempty("Sobrenome é obrigatório"),
  email:z.string().email("E-mail inválido").nonempty("E-mail é obrigatório"),
  senha: z.string().min(8, "Senha deve ter pelo menos 8 caracteres").nonempty("Senha é obrigatória"),
  type: z.enum(["Freelancer", "Customer"]).default("Freelancer"),
});

export type ValidationCreateAccount = z.infer<typeof validationCreateAccount>;

// Validação da página de atualização de perfil


export const validationUpdateProfile =z.object({
  nome:z.string().min(5,"nome obrigatorio"),
  sobrenome: z.string().nonempty("Sobrenome é obrigatório"),
  senha: z.string().min(8, "Senha deve ter pelo menos 8 caracteres"),
})


export type ValidationUpdateProfile = z.infer<typeof validationUpdateProfile>;