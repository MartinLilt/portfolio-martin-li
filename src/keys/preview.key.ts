export const sanityKeyPreview = `{
    "portfolio": *[_type == "portfolio"] {
      title,
      "casePath": casepath,
      "caseTags": casetags,
      "casePreviewTitle": casePreview.suptitle,
      "casePreviewDesc": casePreview.desc,
      "casePreviewImage": casePreview.image.asset->url,
    },
    "services": *[_type == "services"] {
      title,
      link,
      description,
      tags, 
      object3DFile,
    },
    "resume": *[_type == "resume"] {
      title,
      company,
      location,
      description,
      contract,
      date,
    },
    "cvFile": *[_type == "myCurrentCv"] {
      publishedAt,
      "uploadingCv": uploadingCv.asset->{
      _id,
      originalFilename,
      url
      },
    },
    "skills": *[_type == "skills"] {
      title,
      icon,
      progress,
      tags,
    },
    "customerLogos": *[_type == "customerLogos"] {
      customerLink,
      customerAlert,
      "customerLogo": customerLogo.asset->url,
    },
    "social": *[_type == "social"] {
      iconName,
      iconUrl,
      iconReact,
    },
    "testimonials": *[_type == "portfolio"] {
        "comment": caseMainContent.customerComment,
        "ranked": caseMainContent.customerRanked,
        "business": caseMainContent.customerBusiness,
        "avatar": caseMainContent.customerAvatar.asset->url,
    }
  }`;
