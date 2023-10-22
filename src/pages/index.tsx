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
import { ICvProps, IResumeProps, ISkillsProps } from "@/interfaces";

export interface IStaticOptions {
  options: {
    cvPageProps: ICvProps[];
    resumePageProps: IResumeProps[];
    skillsPageProps: ISkillsProps[];
  };
}

const Home: NextPage<IStaticOptions> = ({ options }) => {
  const { cvPageProps, resumePageProps, skillsPageProps } = options;

  return (
    <MainContainer>
      <HeroContainer />
      <CvContainer options={cvPageProps} />
      <AboutContainer />
      <ResumeContainer options={resumePageProps} />
      <SkillsContainer options={skillsPageProps} />
      <ServicesContainer />
      <PortfolioContainer />
      <TestimonialsContainer />
      <ClientsContainer />
      <FeedBackContainer />
    </MainContainer>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_STATIC_PROPS}`
  );
  const options = await res.json();

  return {
    props: {
      options,
    },
  };
}

export default Home;
