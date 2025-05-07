import { FreelancerService } from "@/services/freelancerServices";
import { IProject } from "@/types/projects";
import { isAfter } from "date-fns";
import { useEffect, useState } from "react";

export function useProjects(){
    
  const [projects, setProjects] = useState<IProject[]>([]);

  const fetchProjects = async () => {
    const response = await FreelancerService.fetchAllProjects(12);
    setProjects(response.data)
  }

  const projectExpired = (deadLine: string) => {
    return isAfter(new Date(), new Date(deadLine));
  };  

  useEffect(() => {
    fetchProjects();
  }, []);



  return {
    projects,
    projectExpired,
    // alreadyProjects: projects.length > 0
  }
}