
import { ProposalClient } from "@/pages/proposal/proposalClient";
import { ProposalFreelancer } from "@/pages/proposal/proposalFreelancer";

export function RouterForProposal() {
  var clintOrFreelancer = 1;

  if ((clintOrFreelancer === 1)) return <ProposalFreelancer/>;
  else return <ProposalClient />;
}