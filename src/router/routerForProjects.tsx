import { ProjectsClient } from "@/pages/project/projectsClient";
import { ProjectsFreelancer } from "@/pages/project/projectsFreelancer";

export function RouterForProject() {
  var clintOrFreelancer = 1;

  if ((clintOrFreelancer === 1)) return <ProjectsFreelancer />;
  else return <ProjectsClient />;
}