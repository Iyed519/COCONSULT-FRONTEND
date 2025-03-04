import { Project } from "./project";

export class ProjectBudget {
  idProjectBudget: number;
  project: Project;
  initialBudget: number;
  currentBudget: number;
  spentBudget: number;
  lastUpdated: Date;

  constructor() {
    this.idProjectBudget = 0;
    this.project = new Project();
    this.initialBudget = 0;
    this.currentBudget = 0;
    this.spentBudget = 0;
    this.lastUpdated = new Date();
  }
}
