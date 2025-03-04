import { Project } from "./project";
import { Milestone } from "./milestone";

export class ProjectTasks {
  idProjectTasks: number;
  name: string;
  description: string;
  assignedTo: string;
  startDate: Date;
  endDate: Date;
  status: 'not started' | 'in-progress' | 'completed';
  resourcesAllocated: string[];
  deliverableValidated: boolean;
  project: Project;
  milestone?: Milestone;

  constructor() {
    this.idProjectTasks = 0;
    this.name = '';
    this.description = '';
    this.assignedTo = '';
    this.startDate = new Date();
    this.endDate = new Date();
    this.status = 'not started';
    this.resourcesAllocated = [];
    this.deliverableValidated = false;
    this.project = new Project();
  }
}
