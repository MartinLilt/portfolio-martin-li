export const portfolioKeyCase = `*[_type == "portfolio" && casepath == $slug][0]{
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
  }`;
