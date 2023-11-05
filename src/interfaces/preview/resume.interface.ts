export interface IResumePreview {
  title: string;
  contract: {
    contractLocation: string;
    contractType: string;
  };
  date: {
    startDate: string;
    endDate: string;
  };
  description: string;
  location: string;
  company: string;
}
