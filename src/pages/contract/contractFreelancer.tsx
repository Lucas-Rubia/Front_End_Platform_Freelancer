
import { getRandomGradient } from "@/components/get-random-gradient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { images } from "@/utils/imagem";
import { ArrowRight } from "lucide-react";



export function ContractFreelancer(){
    return (
      <div className="bg-gray_700 px-28 pb-20 py-10 max-[768px]:px-10">
        <div className="flex text-sm justify-center mb-10">
          <h1 className="uppercase text-[28px] text-center leading-8">
            All yours Contracts
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-5 max-w-[1000px] mx-auto max-[1024px]:grid-cols-1">
          <Card className="col-span-6 bg-gray_600 border-none">
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span
                    className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                  />
                  <CardTitle className="max-[768px]:text-lg">
                    Redesign de Website Corporativo
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Projeto focado na atualização do site institucional para
                  melhorar a experiência do usuário, modernizar a identidade
                  visual e otimizar a navegação para dispositivos móveis.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm items-center max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src={images.Avatar} />
                    <AvatarFallback>Avatar1</AvatarFallback>
                  </Avatar>
                  <ArrowRight color="#C3C3D1" />
                  <Avatar>
                    <AvatarImage src={images.Avatar2} />
                    <AvatarFallback>Avatar2</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-2 items-center">
                  <p>Pending</p>
                  <span className="rounded-full size-4 bg-[#ffa500] shrink-0" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-6 bg-gray_600 border-none">
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span
                    className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                  />
                  <CardTitle className="max-[768px]:text-lg">
                    Plataforma de E-commerce
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Desenvolvimento de uma plataforma de vendas online com
                  integração a sistemas de pagamento, gestão de estoque e área
                  administrativa para vendedores.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm items-center max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src={images.Avatar} />
                    <AvatarFallback>Avatar1</AvatarFallback>
                  </Avatar>
                  <ArrowRight color="#C3C3D1" />
                  <Avatar>
                    <AvatarImage src={images.Avatar2} />
                    <AvatarFallback>Avatar2</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-2 items-center">
                  <p>In Progress</p>
                  <span className={`rounded-full size-4 bg-green-500 shrink-0`} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-6 bg-gray_600 border-none">
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span
                    className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                  />
                  <CardTitle className="max-[768px]:text-lg">
                    Aplicativo de Controle Financeiro
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Criação de um app mobile para gerenciamento de finanças
                  pessoais, com funcionalidades de orçamento, relatórios e
                  alertas de vencimento.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm items-center max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src={images.Avatar} />
                    <AvatarFallback>Avatar1</AvatarFallback>
                  </Avatar>
                  <ArrowRight color="#C3C3D1" />
                  <Avatar>
                    <AvatarImage src={images.Avatar2} />
                    <AvatarFallback>Avatar2</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-2 items-center">
                  <p>Finished</p>
                  <span className={`rounded-full size-4 bg-red-500 shrink-0`} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-6 bg-gray_600 border-none">
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span
                    className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                  />
                  <CardTitle className="max-[768px]:text-lg">
                    Sistema de Reservas Online
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Implementação de sistema para agendamento e reserva de
                  serviços, com notificações automáticas e painel de
                  gerenciamento para administradores.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm items-center max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src={images.Avatar} />
                    <AvatarFallback>Avatar1</AvatarFallback>
                  </Avatar>
                  <ArrowRight color="#C3C3D1" />
                  <Avatar>
                    <AvatarImage src={images.Avatar2} />
                    <AvatarFallback>Avatar2</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-2 items-center">
                <p>Finished</p>
                <span className={`rounded-full size-4 bg-red-500 shrink-0`} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-6 bg-gray_600 border-none">
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span
                    className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                  />
                  <CardTitle className="max-[768px]:text-lg">
                    Sistema de Suporte e Chamados
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Desenvolvimento de um portal de suporte com abertura de
                  chamados, acompanhamento de status e feedback do atendimento
                  para clientes.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm items-center max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src={images.Avatar} />
                    <AvatarFallback>Avatar1</AvatarFallback>
                  </Avatar>
                  <ArrowRight color="#C3C3D1" />
                  <Avatar>
                    <AvatarImage src={images.Avatar2} />
                    <AvatarFallback>Avatar2</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-2 items-center">
                <p>In Progress</p>
                <span className={`rounded-full size-4 bg-green-500 shrink-0`} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-6 bg-gray_600 border-none">
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span
                    className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                  />
                  <CardTitle className="max-[768px]:text-lg">
                    Portal de Notícias Interno
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Criação de um portal para comunicação interna, com publicação
                  de comunicados, eventos e espaço para feedbacks dos
                  colaboradores.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm items-center max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src={images.Avatar} />
                    <AvatarFallback>Avatar1</AvatarFallback>
                  </Avatar>
                  <ArrowRight color="#C3C3D1" />
                  <Avatar>
                    <AvatarImage src={images.Avatar2} />
                    <AvatarFallback>Avatar2</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-2 items-center">
                <p>In Progress</p>
                <span className={`rounded-full size-4 bg-green-500 shrink-0`} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-6 bg-gray_600 border-none">
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span
                    className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                  />
                  <CardTitle className="max-[768px]:text-lg">
                    Aplicativo de Treinamentos Online
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Plataforma de cursos e treinamentos online com controle de
                  progresso, certificações automáticas e aulas interativas.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm items-center max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src={images.Avatar} />
                    <AvatarFallback>Avatar1</AvatarFallback>
                  </Avatar>
                  <ArrowRight color="#C3C3D1" />
                  <Avatar>
                    <AvatarImage src={images.Avatar2} />
                    <AvatarFallback>Avatar2</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-2 items-center">
                  <p>Pending</p>
                  <span className="rounded-full size-4 bg-[#ffa500] shrink-0" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-6 bg-gray_600 border-none">
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span
                    className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                  />
                  <CardTitle className="max-[768px]:text-lg">
                    Dashboard de Análise de Dados
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Desenvolvimento de um painel interativo para visualização e
                  análise de dados de vendas, engajamento de clientes e
                  desempenho de campanhas.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm items-center max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-4">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src={images.Avatar} />
                    <AvatarFallback>Avatar1</AvatarFallback>
                  </Avatar>
                  <ArrowRight color="#C3C3D1" />
                  <Avatar>
                    <AvatarImage src={images.Avatar2} />
                    <AvatarFallback>Avatar2</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-2 items-center">
                <p>Finished</p>
                <span className={`rounded-full size-4 bg-red-500 shrink-0`} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className=" hover:bg-gray_600" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className=" hover:bg-gray_600">
                1
              </PaginationLink>
              <PaginationLink
                href="#"
                className=" hover:bg-gray_600 max-[425px]:hidden"
              >
                2
              </PaginationLink>
              <PaginationLink
                href="#"
                className=" hover:bg-gray_600 max-[768px]:hidden"
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className=" hover:bg-gray_600 max-[425px]:hidden"
              >
                50
              </PaginationLink>
              <PaginationNext href="#" className=" hover:bg-gray_600 " />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
}