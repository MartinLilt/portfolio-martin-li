import { MainContainer } from "@/containers";
import { sanityClientReq } from "@/helpers";
import { IServiceOptions } from "@/interfaces";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

const Service = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(post);

  return (
    <MainContainer>
      <div></div>
    </MainContainer>
  );
};

export const getStaticPaths = (async () => {
  const hrefs = await sanityClientReq(
    '*[_type == "services"]{ "path": link.href }'
  );
  const paths = hrefs?.map(({ path }: { path: string }) => ({
    params: { slug: path },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const post = await sanityClientReq(
    `*[_type == "services" && link.href == $slug][0]`,
    {
      slug: params?.slug as string,
    }
  );

  return {
    props: {
      post,
    },
  };
}) satisfies GetStaticProps<{ post: IServiceOptions }>;

export default Service;
