import { HeroSectionClient } from "@/pages/home/heroSectionClient";
import { HeroSectionFreelancer } from "@/pages/home/heroSectionFreelancer";

export function RouterForHome() {
  var clintOrFreelancer = 1;

  if ((clintOrFreelancer === 1)) return <HeroSectionFreelancer />;
  else return <HeroSectionClient />;
}