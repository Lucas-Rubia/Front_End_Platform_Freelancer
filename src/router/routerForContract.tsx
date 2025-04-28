import { ContractClient } from "@/pages/contract/contractClient";
import { ContractFreelancer } from "@/pages/contract/contractFreelancer";


export function RouterForContract() {
  var clintOrFreelancer = 1;

  if ((clintOrFreelancer === 1)) return <ContractFreelancer/>;
  else return <ContractClient />;
}