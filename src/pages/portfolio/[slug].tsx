import { CaseContainer, MainContainer } from "@/containers";
import { sanityClientReq } from "@/helpers";
import { IPostOptions } from "@/interfaces";
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
  const post = await sanityClientReq(
    `*[_type == "portfolio" && casepath == $slug][0]{
      title,
      "caseTags": casetags,
      "caseContent": caseMainContent.content,
      "caseDate": caseMainContent.publishedAt,
      "caseRate": caseMainContent.customerRanked,
      "caseComment": caseMainContent.customerComment,
      "casePreviewImage": casePreview.image.asset->url,
      "caseImages": caseMainContent.images[]{
        asset-> {
          url
        }
      }
    }`,
    {
      slug: params?.slug as string,
    }
  );

  return {
    props: {
      post,
    },
  };
}) satisfies GetStaticProps<{ post: IPostOptions }>;

export default Portfolio;
