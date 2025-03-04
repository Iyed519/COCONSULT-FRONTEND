export class PerformanceReport {
    idReport: number;
    reportName: string;
    reportDate: Date;
  
    constructor() {
      this.idReport = 0;
      this.reportName = '';
      this.reportDate = new Date();
    }
  }
  