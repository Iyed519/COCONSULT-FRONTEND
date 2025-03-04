import { Project } from "./project";

export class Milestone {
  milestoneId: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: 'not started' | 'in-progress' | 'completed';
  project: Project;

  constructor() {
    this.milestoneId = 0;
    this.name = '';
    this.description = '';
    this.startDate = new Date();
    this.endDate = new Date();
    this.status = 'not started';
    this.project = new Project();
  }
}
