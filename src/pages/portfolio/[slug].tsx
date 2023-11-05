import { CaseContainer, MainContainer } from "@/containers";
import { sanityClientReq } from "@/helpers";
import { IPostOptions } from "@/interfaces";
import { portfolioKeyCase } from "@/keys";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

const Portfolio = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainContainer>
      <CaseContainer options={post} />
    </MainContainer>
  );
};

export const getStaticPaths = (async () => {
  const posts = await sanityClientReq(`*[_type == "portfolio"]{ casepath }`);
  const paths = posts?.map(({ casepath }: { casepath: string }) => ({
    params: { slug: casepath },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const post = await sanityClientReq(portfolioKeyCase, {
    slug: params?.slug as string,
  });

  return {
    props: {
      post,
    },
  };
}) satisfies GetStaticProps<{ post: IPostOptions }>;

export default Portfolio;
