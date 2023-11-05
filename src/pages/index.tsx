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
import { IPreview } from "@/interfaces";
import { sanityKeyPreview } from "@/keys";
import { sanityClientReq } from "@/helpers";

const Home: NextPage<IPreview> = ({ options }) => {

  const {
    customerLogos,
    cvFile,
    portfolio,
    resume,
    services,
    skills,
    social,
    testimonials,
  } = options;

  return (
    <MainContainer options={social}>
      <HeroContainer />
      <CvContainer options={cvFile} />
      <AboutContainer />
      <ResumeContainer options={resume} />
      <SkillsContainer options={skills} />
      <ServicesContainer options={services} />
      <PortfolioContainer options={portfolio} />
      <TestimonialsContainer options={testimonials} />
      <ClientsContainer options={customerLogos} />
      <FeedBackContainer options={social} />
    </MainContainer>
  );
};

export async function getStaticProps() {
  const options = await sanityClientReq(sanityKeyPreview);

  return {
    props: {
      options,
    },
  };
}

export default Home;
