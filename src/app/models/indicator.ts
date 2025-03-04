import { PerformanceReport } from "../models/performance-report";

export class Indicator {
  indicatorId: number;
  name: string;
  value: number;
  description: string;
  performanceReport: PerformanceReport;

  constructor() {
    this.indicatorId = 0;
    this.name = '';
    this.value = 0;
    this.description = '';
    this.performanceReport = new PerformanceReport();
  }
}
