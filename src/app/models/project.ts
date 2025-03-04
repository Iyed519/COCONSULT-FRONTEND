import { Milestone } from "./milestone";
import { ProjectTasks } from "./project-tasks";

export class Project {
  idProject: number;
  projectName: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: 'planned' | 'in-progress' | 'completed';
  budget: number;
  client: string;
  associatedTasks?: ProjectTasks[];
  manager: string;
  teamMembers: string[];
  milestones: Milestone[];
  tasks: ProjectTasks[];

  constructor() {
    this.idProject = 0;
    this.projectName = '';
    this.description = '';
    this.startDate = new Date();
    this.endDate = new Date();
    this.status = 'planned';
    this.budget = 0;
    this.client = '';
    this.manager = '';
    this.teamMembers = [];
    this.milestones = [];
    this.tasks = [];
  }
}

export { ProjectTasks };
