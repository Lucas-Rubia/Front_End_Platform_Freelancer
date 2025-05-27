import { ContractFreelancer } from "@/pages/contract/contractFreelancer";
import { HeroSectionFreelancer } from "@/pages/home/heroSectionFreelancer";
import { ProjectsFreelancer } from "@/pages/project/projectsFreelancer";
import { ProposalFreelancer } from "@/pages/proposal/proposalFreelancer";
import { Route, Routes } from "react-router-dom";


export function Router(){
    return(
        <Routes>
            <Route path="/" element={<HeroSectionFreelancer/>}/>
            <Route path="/:projectId/projetosFreelancer" element={<ProjectsFreelancer />}/>
            <Route path="/proposalFreelancer" element={<ProposalFreelancer />}/>
            <Route path="/contractFreelancer" element={<ContractFreelancer />}/>
        </Routes>
    )
}