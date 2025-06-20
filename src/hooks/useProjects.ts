import { FreelancerService } from "@/services/freelancerServices";
import { IProject, IProjectUnique } from "@/types/projects";
import { isAfter } from "date-fns";
import { useCallback, useState } from "react";
import { usePagination } from "./usePagination";

export function useProjects(){

  const [loading, setLoading] = useState(true)
    
  const [projects, setProjects] = useState<IProject[]>([]);
  const [projectById, setProjectById] = useState<IProjectUnique | undefined>(undefined);

  const {pagination, setPageSize, setPage, setPagination} = usePagination();
  const {currentPage, pageSize} = pagination


    const fetchProjects = useCallback(async (userID?:number) => {
    const response = userID
      ? await FreelancerService.fetchProjectsFromUser(userID, currentPage, pageSize)
      : await FreelancerService.fetchAllProjects(currentPage, pageSize);

      setProjects(response.data)
       setPagination(response.pagination)
  }, [currentPage, pageSize])



  const projectExpired = (deadLine: string) => {
    return isAfter(new Date(), new Date(deadLine));
  };  

    const fetchProjectByID = useCallback(async (projectID:number) => {
      setLoading(true)
      const fetchedProject = await FreelancerService.fetchProjectById(projectID);
      setProjectById(fetchedProject.data);
      setLoading(false)
  }, [setProjectById])
  


  return {
    projects,
    projectExpired,
    pagination,
    setPageSize,
    setPage,
    fetchProjects,
    fetchProjectByID,
    projectById,
    loading,
    setProjects,

  };
}