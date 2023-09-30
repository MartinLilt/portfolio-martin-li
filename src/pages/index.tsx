import { NextPage } from "next";
import {
  CvContainer,
  HeroContainer,
  MainContainer,
  AboutContainer,
  ResumeContainer,
  SkillsContainer,
  ServicesContainer,
  PortfolioContainer,
  TestimonialsContainer,
  ClientsContainer,
  FeedBackContainer,
} from "@/containers";

const Home: NextPage = () => {
  return (
    <MainContainer>
      <HeroContainer />
      <CvContainer />
      <AboutContainer />
      <ResumeContainer />
      <SkillsContainer/>
      <ServicesContainer />
      <PortfolioContainer />
      <TestimonialsContainer />
      <ClientsContainer />
      <FeedBackContainer />
    </MainContainer>
  );
};

export default Home;
