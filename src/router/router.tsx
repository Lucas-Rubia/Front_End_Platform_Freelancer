import { BaseLayout } from "@/layout/baseLayout";
import { ContractFreelancer } from "@/pages/contract/contractFreelancer";
import { HeroSectionFreelancer } from "@/pages/home/heroSectionFreelancer";
import { CreateAccount } from "@/pages/login/createAccount";
import { SignUp } from "@/pages/login/signUp";
import { ProjectsFreelancer } from "@/pages/project/projectsFreelancer";
import { ProposalFreelancer } from "@/pages/proposal/proposalFreelancer";
import { SettingPage } from "@/pages/settings/settingsPage";
import { Route, Routes } from "react-router-dom";


export function Router(){
    return (
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createaccount" element={<CreateAccount />} />

        <Route element={<BaseLayout />}>
          <Route path="/" element={<HeroSectionFreelancer />} />
          <Route
            path="/:projectId/projetosFreelancer"
            element={<ProjectsFreelancer />}
          />
          <Route path="/proposalFreelancer" element={<ProposalFreelancer />} />
          <Route path="/contractFreelancer" element={<ContractFreelancer />} />
          <Route path="/settingpage" element={<SettingPage />} />
        </Route>
      </Routes>
    );
}