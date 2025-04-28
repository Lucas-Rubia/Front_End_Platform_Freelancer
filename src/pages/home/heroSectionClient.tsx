
import { getRandomGradient } from "@/components/get-random-gradient";
import { Badge } from "@/components/ui/badge";
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


export function HeroSectionClient(){
    return (
      <div className="bg-gray_700 px-28 pb-20 py-10 max-[768px]:px-10">
        <div className="flex text-sm justify-center mb-10">
          <h1 className="upeercase text-[28px]">All Projects</h1>
        </div>

        <div className="grid grid-cols-12 gap-5 max-w-[1000px] mx-auto max-[1024px]:grid-cols-1">
          <Card className="col-span-6 bg-gray_600 border-none">
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span
                    className={`rounded-full size-7 ${getRandomGradient()} shrink-0 max-[768px]:size-5`}
                  />
                  <CardTitle className="max-[768px]:text-lg">Project of landing page</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, recusandae. Id atque quos dolor optio cumque autem!
                  Autem enim unde aliquid molestias nostrum. Eos ut sit adipisci
                  nobis odio ab?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, recusandae. Id atque quos dolor optio
                  cumque autem! Autem enim unde aliquid molestias nostrum. Eos
                  ut sit adipisci nobis odio ab?
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold"> 04/05/2025</span>
                </p>
                <Badge className="bg-gray_600 ml-1 text-white border-ring-2 rounded-md border-gray_300 hover:bg-transparent text-center">
                   12 proposatas
                </Badge>
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
                  <CardTitle className="max-[768px]:text-lg">Project of landing page</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, recusandae. Id atque quos dolor optio cumque autem!
                  Autem enim unde aliquid molestias nostrum. Eos ut sit adipisci
                  nobis odio ab?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, recusandae. Id atque quos dolor optio
                  cumque autem! Autem enim unde aliquid molestias nostrum. Eos
                  ut sit adipisci nobis odio ab?
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold"> 04/05/2025</span>
                </p>
                <Badge className="bg-gray_600 ml-1 text-white border-ring-2 rounded-md border-gray_300 hover:bg-transparent text-center">
                   12 proposatas
                </Badge>
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
                  <CardTitle className="max-[768px]:text-lg">Project of landing page</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, recusandae. Id atque quos dolor optio cumque autem!
                  Autem enim unde aliquid molestias nostrum. Eos ut sit adipisci
                  nobis odio ab?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, recusandae. Id atque quos dolor optio
                  cumque autem! Autem enim unde aliquid molestias nostrum. Eos
                  ut sit adipisci nobis odio ab?
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold"> 04/05/2025</span>
                </p>
                <Badge className="bg-gray_600 ml-1 text-white border-ring-2 rounded-md border-gray_300 hover:bg-transparent text-center">
                   12 proposatas
                </Badge>
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
                  <CardTitle className="max-[768px]:text-lg">Project of landing page</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, recusandae. Id atque quos dolor optio cumque autem!
                  Autem enim unde aliquid molestias nostrum. Eos ut sit adipisci
                  nobis odio ab?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, recusandae. Id atque quos dolor optio
                  cumque autem! Autem enim unde aliquid molestias nostrum. Eos
                  ut sit adipisci nobis odio ab?
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold"> 04/05/2025</span>
                </p>
                <Badge className="bg-gray_600 ml-1 text-white border-ring-2 rounded-md border-gray_300 hover:bg-transparent text-center">
                   12 proposatas
                </Badge>
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
                  <CardTitle className="max-[768px]:text-lg">Project of landing page</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, recusandae. Id atque quos dolor optio cumque autem!
                  Autem enim unde aliquid molestias nostrum. Eos ut sit adipisci
                  nobis odio ab?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, recusandae. Id atque quos dolor optio
                  cumque autem! Autem enim unde aliquid molestias nostrum. Eos
                  ut sit adipisci nobis odio ab?
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold"> 04/05/2025</span>
                </p>
                <Badge className="bg-gray_600 ml-1 text-white border-ring-2 rounded-md border-gray_300 hover:bg-transparent text-center">
                   12 proposatas
                </Badge>
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
                  <CardTitle className="max-[768px]:text-lg">Project of landing page</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, recusandae. Id atque quos dolor optio cumque autem!
                  Autem enim unde aliquid molestias nostrum. Eos ut sit adipisci
                  nobis odio ab?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, recusandae. Id atque quos dolor optio
                  cumque autem! Autem enim unde aliquid molestias nostrum. Eos
                  ut sit adipisci nobis odio ab?
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold"> 04/05/2025</span>
                </p>
                <Badge className="bg-gray_600 ml-1 text-white border-ring-2 rounded-md border-gray_300 hover:bg-transparent text-center">
                   12 proposatas
                </Badge>
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
                  <CardTitle className="max-[768px]:text-lg">Project of landing page</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, recusandae. Id atque quos dolor optio cumque autem!
                  Autem enim unde aliquid molestias nostrum. Eos ut sit adipisci
                  nobis odio ab?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, recusandae. Id atque quos dolor optio
                  cumque autem! Autem enim unde aliquid molestias nostrum. Eos
                  ut sit adipisci nobis odio ab?
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold"> 04/05/2025</span>
                </p>
                <Badge className="bg-gray_600 ml-1 text-white border-ring-2 rounded-md border-gray_300 hover:bg-transparent text-center">
                   12 proposatas
                </Badge>
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
                  <CardTitle className="max-[768px]:text-lg">Project of landing page</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, recusandae. Id atque quos dolor optio cumque autem!
                  Autem enim unde aliquid molestias nostrum. Eos ut sit adipisci
                  nobis odio ab?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, recusandae. Id atque quos dolor optio
                  cumque autem! Autem enim unde aliquid molestias nostrum. Eos
                  ut sit adipisci nobis odio ab?
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold"> 04/05/2025</span>
                </p>
                <Badge className="bg-gray_600 ml-1 text-white border-ring-2 rounded-md border-gray_300 hover:bg-transparent text-center">
                   12 proposatas
                </Badge>
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
                  <CardTitle className="max-[768px]:text-lg">Project of landing page</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, recusandae. Id atque quos dolor optio cumque autem!
                  Autem enim unde aliquid molestias nostrum. Eos ut sit adipisci
                  nobis odio ab?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, recusandae. Id atque quos dolor optio
                  cumque autem! Autem enim unde aliquid molestias nostrum. Eos
                  ut sit adipisci nobis odio ab?
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold"> 04/05/2025</span>
                </p>
                <Badge className="bg-gray_600 ml-1 text-white border-ring-2 rounded-md border-gray_300 hover:bg-transparent text-center">
                   12 proposatas
                </Badge>
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
                  <CardTitle className="max-[768px]:text-lg">Project of landing page</CardTitle>
                </div>
                <CardDescription className="line-clamp-3 max-[768px]:text-sm max-[768px]:line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, recusandae. Id atque quos dolor optio cumque autem!
                  Autem enim unde aliquid molestias nostrum. Eos ut sit adipisci
                  nobis odio ab?Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, recusandae. Id atque quos dolor optio
                  cumque autem! Autem enim unde aliquid molestias nostrum. Eos
                  ut sit adipisci nobis odio ab?
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <p>
                  Prazo final:
                  <span className="text-blue_light font-bold"> 04/05/2025</span>
                </p>
                <Badge className="bg-gray_600 ml-1 text-white border-ring-2 rounded-md border-gray_300 hover:bg-transparent text-center">
                   12 proposatas
                </Badge>
              </div>
            </CardContent>
          </Card>

        </div>

        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className=" hover:bg-gray_600"/>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className=" hover:bg-gray_600">1</PaginationLink>
              <PaginationLink href="#" className=" hover:bg-gray_600 max-[425px]:hidden">2</PaginationLink>
              <PaginationLink href="#" className=" hover:bg-gray_600 max-[768px]:hidden">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis/>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#" className=" hover:bg-gray_600 max-[425px]:hidden">50</PaginationLink>
              <PaginationNext href="#" className=" hover:bg-gray_600 "/>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
}