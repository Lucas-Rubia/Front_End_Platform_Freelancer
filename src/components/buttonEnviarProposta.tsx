import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useProposal } from "@/hooks/useProposal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  NumberFormatValues,
  NumericFormat,
  SourceInfo
} from "react-number-format";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
    proposedValue: z
    .number({
      required_error: "O valor da proposta é obrigatório.",
      invalid_type_error: "Valor inválido.",
    })
    .positive({ message: "O valor da proposta deve ser maior que R$ 0,00." })
    .finite({ message: "O valor inserido é muito grande." })
    .max(1000000000, "O valor máximo da proposata deve estar entre o R$ 1 e R$1.000.000.000"),
    message: z
      .string()
      .max(160, {
        message: "A descrição precisa ter menos que 150 caracteres.",
      })
    .trim(),
  })

export function ButtonEnviarProposta() {

  const {projectId} = useParams<{ projectId:string }>();

  const{sendProposalUnique} = useProposal();

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        proposedValue: undefined,
        message: "",
      },
    });
     
     async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {await sendProposalUnique(Number(projectId), 20, data.proposedValue, data.message, 3); 
          toast("Sua proposta foi enviada", {
              description: "Fique atento que o cliente pode aceitar sua proposta a qualquer momento.",
            });
            form.reset();
        } catch (error) {
            console.error("Falha ao enviar proposta:", error);
            toast.error("Erro ao enviar proposta", {
              description:
                "Ocorreu um problema. Por favor, tente novamente mais tarde.",
            });
            
          }
          console.log(data);
        }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue_dark mb-4 text-16 px-8 rounded-sm hover:bg-blue_light uppercase">
          Enviar proposta
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray_600 p-10 max-w-[calc(100%-2rem)] sm:max-w-lg border-none">
        <DialogHeader>
          <DialogTitle className="heading-28">
            Envie sua proposta
          </DialogTitle>
          <DialogDescription className="text-16 text-gray_200">
            Faça sua oferta para esse projeto.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="proposedValue"
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <NumericFormat
                      name={name}
                      className="bg-gray_500"
                      customInput={Input}
                      prefix="R$ "
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="R$ 0,00"
                      value={value === undefined ? "" : value}
                      onValueChange={(
                        values: NumberFormatValues,
                        sourceInfo: SourceInfo
                      ) => {
                        if (sourceInfo.event) {
                          onChange(values.floatValue);
                        }
                      }}
                      onBlur={onBlur}
                      getInputRef={ref}
                      inputMode="decimal"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descreva sua proposta e como você oferecerá ela</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva sua proposta, não esqueça de incluir o porque do valor da proposta"
                      className="resize-none bg-gray_500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="uppercase bg-blue_dark hover:bg-blue_light text-white mx-auto flex"
            >
              {form.formState.isSubmitting ? "Enviando..." : "Enviar proposta"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
