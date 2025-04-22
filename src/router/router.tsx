import { ContractFreelancer } from "@/pages/contract/contractFreelancer";
import { Home } from "@/pages/home/home";
import { ProjectsFreelancer } from "@/pages/project/projectsFreelancer";
import { ProposalFreelancer } from "@/pages/proposal/proposalFreelancer";
import { Route, Routes } from "react-router-dom";


export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projetosFreelancer" element={<ProjectsFreelancer />}/>
            <Route path="/proposalFreelancer" element={<ProposalFreelancer />}/>
            <Route path="/contractFreelancer" element={<ContractFreelancer />}/>

        </Routes>
    )
}