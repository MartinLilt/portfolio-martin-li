import { ICustomerLogoPreview } from "./customerLogo.interface";
import { ICvPreview } from "./cvFile.interface";
import { IPortfolioPreview } from "./portfolio.interface";
import { IResumePreview } from "./resume.interface";
import { IServicesPreview } from "./services.interface";
import { ISkillPreview } from "./skills.interface";
import { ISocialMediaPreview } from "./social.interface";
import { ITestimonialsPreview } from "./testimonials.interface";

export interface IPreview {
  options: {
    customerLogos: ICustomerLogoPreview[];
    cvFile: [ICvPreview];
    portfolio: IPortfolioPreview[];
    resume: IResumePreview[];
    services: IServicesPreview[];
    skills: ISkillPreview[];
    social: ISocialMediaPreview[];
    testimonials: ITestimonialsPreview[];
  };
}
