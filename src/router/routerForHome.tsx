import { HeroSectionClient } from "@/pages/home/heroSectionClient";
import { HeroSectionFreelancer } from "@/pages/home/heroSectionFreelancer";

export function RouterForHome() {
  const clintOrFreelancer = 1;

 return clintOrFreelancer === 1 ? (
   <HeroSectionFreelancer />
 ) : (
   <HeroSectionClient />
 );
}