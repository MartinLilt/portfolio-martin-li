import { MainContainer } from "@/containers";
import { NextPage, NextPageContext } from "next";

const Error: NextPage<{ statusCode?: number }> = ({ statusCode }) => {
  return (
    <MainContainer>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </MainContainer>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
