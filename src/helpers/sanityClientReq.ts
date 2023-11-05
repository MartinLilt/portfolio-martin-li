import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "sebt9i0k",
  dataset: "limihub",
  apiVersion: "2021-08-31",
  useCdn: false,
});

export const sanityClientReq = async (
  sanutyRequest: string,
  pageSlug?: { slug: string }
) => {
  if (!client) {
    throw new Error(
      "The sanityClientReq helper error, clinet is not available"
    );
  }

  const handlerError = () => {
    throw new Error("useSanity hook error, bad request..");
  };

  try {
    const result = await client.fetch(sanutyRequest, pageSlug);
    if (!result) {
      handlerError();
    }
    return result;
  } catch (err) {
    handlerError();
  }
};
