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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  NumberFormatValues,
  NumericFormat,
  SourceInfo
} from "react-number-format";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
    amount: z
    .number({
      required_error: "O valor da proposta é obrigatório.",
      invalid_type_error: "Valor inválido.",
    })
    .positive({ message: "O valor da proposta deve ser maior que R$ 0,00." })
    .finite({ message: "O valor inserido é muito grande." }),
  description: z
    .string()
    .max(160, {
      message: "A descrição precisa ter menos que 150 caracteres.",
    })
    .trim(),
  })

export function ButtonEnviarProposta() {

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        amount: undefined,
        description: "",
      },
    });
     
      function onSubmit(data: z.infer<typeof FormSchema>) {
        return new Promise((resolve) =>
          setTimeout(() => {
            toast("Sua proposta foi enviada", {
              description:
                "Fique atento que o cliente pode aceitar sua proposta a qualquer momento.",
            });
            form.reset();
            resolve(void 0);
          }, 1000)
        );
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
              name="amount"
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descreva sua proposta e como você oferecerá ela</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva sua proposta, não esqueça de incluir o valor da proposta"
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
