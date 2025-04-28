import { Home } from "@/pages/home/home";
import { Route, Routes } from "react-router-dom";
import { RouterForContract } from "./routerForContract";
import { RouterForProject } from "./routerForProjects";
import { RouterForProposal } from "./routerForProposal";


export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projetosFreelancer" element={<RouterForProject />}/>
            <Route path="/proposalFreelancer" element={<RouterForProposal />}/>
            <Route path="/contractFreelancer" element={<RouterForContract />}/>
        </Routes>
    )
}