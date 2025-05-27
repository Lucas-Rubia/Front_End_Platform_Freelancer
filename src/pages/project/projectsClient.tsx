import { getRandomGradient } from "@/components/get-random-gradient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { images } from "@/utils/imagem";
import { ArrowUpRight } from "lucide-react";


export function ProjectsClient() {
    return (
        <div className="px-28 pb-20 pt-10 flex items-start max-[1330px]:flex-col max-[1330px]:juntify-center max-[1330px]:items-center max-[1330px]:gap-10 min-[320px]:px-4 min-[1330px]:jutify-center min-[1330px]:px-28 min-[1440px]:justify-center">
        <div className="bg-gray_600 gap-10 p-10 rounded-[10px] max-w-[728px] min-[320px]:p-5">
          <div className="flex gap-[70px] min-[320px]:flex-col min-[320px]:items-center min-[320px]:gap-10 min-[768px]:flex-row min-[768px]:justify-between min-[768px]:items-start">
            <div className="flex  flex-col min-[320px]:items-center min-[768px]:items-start">
              <Badge className="uppercase  w-fit text-12 text-success_light bg-success hover:bg-success px-3 py-2 ">
                Aceitando Proposta
              </Badge>
              <p className="heading-28 py-4 flex-wrap max-[768px]:heading-28">
                Landing page para Pet Shop
              </p>
              <p className="text-14 text-gray_300">Publicado há 2 horas</p>
            </div>

            <div className="text-14 flex flex-col ">
              <div className="bg-blue_dark mb-4 text-16 px-8 py-2 rounded-sm uppercase">
                200 propostas
              </div>
              <p className="text-gray-300 flex justify-between w-full ">
                <span> Prazo Final:</span>
                <span className="text-gray_100"> 15/05/2025</span>
              </p>
            </div>
          </div>
          <Separator className="bg-gray_400 mt-6" />

          <div className="py-6 text-gray_200 text-16">
            <p>
              Olá! Estamos em busca de um desenvolvedor talentoso para colaborar
              no desenvolvimento de uma landing page dedicada a promover os
              serviços do nosso Pet Shop. Somos uma empresa apaixonada por
              cuidar dos animais, oferecendo serviços de banho e tosa, consultas
              veterinárias, e uma loja completa com produtos de qualidade para
              pets. Sobre o projeto: Escopo: A landing page terá 10 seções,
              cobrindo desde a apresentação da empresa até os serviços
              oferecidos e uma área para agendamento online. Design: O design
              completo já está pronto e finalizado no Figma, garantindo uma base
              sólida para o desenvolvimento. Objetivo: Criar uma página rápida e
              responsiva que ajude a converter visitantes em clientes,
              destacando a confiança e carinho que temos pelos pets. O que
              estamos buscando: Um desenvolvedor competente e comprometido, com
              experiência em HTML, CSS, JavaScript e preferencialmente em React,
              que consiga transformar o design em uma landing page otimizada e
              funcional. Alguém que tenha um olhar crítico para detalhes e que
              possa colaborar para garantir a melhor performance e usabilidade.
              Estamos animados para trabalhar com alguém que compartilhe nossa
              paixão por criar experiências de qualidade!
            </p>
            <Separator className="bg-gray_400 mt-6" />
          </div>

          <div className="text-gray_300 text-12">
            <h2 className="pb-4">Publicado por</h2>
            <div className="flex items-center gap-4 text-14">
              <img src={images.Avatar2} />
              <p>Mayke Brito</p>
            </div>
          </div>
        </div>

        {/* max-w-[448px] */}
        <div className="bg-gray_600 gap-10 p-10 rounded-[10px] ml-10 max-[1380px]:p-5 max-[1330px]:max-w-[728px] max-[1330px]:w-full max-[1330px]:m-0 min-[320px]:p-5 ">
          <div className="mx-10 my-4  flex flex-col min-[320px]:mx-1 min-[320px]:my-1">
            <h1 className="flex justify-center items-center text-20 max-[1330px]:text-2xl">
              Seus outros Projetos
            </h1>
            <Separator className="bg-gray_400 mt-6" />
            <div className="flex justify-between items-center py-6 max-[1380px]:text-12 max-[1380px]:justify-start max-[1380px]:gap-4 min-[768px]:justify-between">
              <span className={`rounded-full size-8 ${getRandomGradient()} text-16 mr-2`}/>
              <div className="min-[320px]:flex min-[320px]:flex-col">
                <h3 className="min-[320px]:text-14"> Landing Page para Cafeteria</h3>
                <p className="text-gray-300 text-12 min-[320px]:text-12 max-[1330px]:text-16">Prazo Final: 20/30/26</p>
              </div>
              <ArrowUpRight className="bg-gray_500 size-8 rounded-full p-2 ml-10 hover:bg-gray_700 min-[320px]:hidden min-[768px]:flex" />
            </div>
            <div className="flex justify-between items-center py-6 max-[1380px]:text-12 max-[1380px]:justify-start max-[1380px]:gap-4 min-[768px]:justify-between">
              <span className={`rounded-full size-8 ${getRandomGradient()} text-16 mr-2`}/>
              <div className="min-[320px]:flex min-[320px]:flex-col">
                <h3 className="min-[320px]:text-14"> Landing Page para Cafeteria</h3>
                <p className="text-gray-300 text-12 min-[320px]:text-12 max-[1330px]:text-16">Prazo Final: 20/30/26</p>
              </div>
              <ArrowUpRight className="bg-gray_500 size-8 rounded-full p-2 ml-10 hover:bg-gray_700 min-[320px]:hidden min-[768px]:flex" />
            </div>
            <div className="flex justify-between items-center py-6 max-[1380px]:text-12 max-[1380px]:justify-start max-[1380px]:gap-4 min-[768px]:justify-between">
              <span className={`rounded-full size-8 ${getRandomGradient()} text-16 mr-2`}/>
              <div className="min-[320px]:flex min-[320px]:flex-col">
                <h3 className="min-[320px]:text-14"> Landing Page para Cafeteria</h3>
                <p className="text-gray-300 text-12 min-[320px]:text-12 max-[1330px]:text-16">Prazo Final: 20/30/26</p>
              </div>
              <ArrowUpRight className="bg-gray_500 size-8 rounded-full p-2 ml-10 hover:bg-gray_700 min-[320px]:hidden min-[768px]:flex" />
            </div>
            <div className="flex justify-between items-center py-6 max-[1380px]:text-12 max-[1380px]:justify-start max-[1380px]:gap-4 min-[768px]:justify-between">
              <span className={`rounded-full size-8 ${getRandomGradient()} text-16 mr-2`}/>
              <div className="min-[320px]:flex min-[320px]:flex-col">
                <h3 className="min-[320px]:text-14"> Landing Page para Cafeteria</h3>
                <p className="text-gray-300 text-12 min-[320px]:text-12 max-[1330px]:text-16">Prazo Final: 20/30/26</p>
              </div>
              <ArrowUpRight className="bg-gray_500 size-8 rounded-full p-2 ml-10 hover:bg-gray_700 min-[320px]:hidden min-[768px]:flex" />
            </div>
            <div className="flex justify-between items-center py-6 max-[1380px]:text-12 max-[1380px]:justify-start max-[1380px]:gap-4 min-[768px]:justify-between">
              <span className={`rounded-full size-8 ${getRandomGradient()} text-16 mr-2`}/>
              <div className="min-[320px]:flex min-[320px]:flex-col">
                <h3 className="min-[320px]:text-14"> Landing Page para Cafeteria</h3>
                <p className="text-gray-300 text-12 min-[320px]:text-12 max-[1330px]:text-16">Prazo Final: 20/30/26</p>
              </div>
              <ArrowUpRight className="bg-gray_500 size-8 rounded-full p-2 ml-10 hover:bg-gray_700 min-[320px]:hidden min-[768px]:flex" />
            </div>
            <Button className=" flex item-center justify-center rounded-md p-3 text-14 bg-gray_500 mt-autobg-trasnparent hover:bg-gray_700">
              Ver todos os seus projetos
            </Button>
          </div>
        </div>
      </div>
    )
}