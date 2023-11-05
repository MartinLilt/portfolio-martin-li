export interface IPostOptions {
  title: string;
  caseTags: string[];
  caseContent: [
    {
      children: [
        {
          text: string;
          marks: string[];
        }
      ];
    }
  ];
  caseDate: string;
  caseRate: number;
  caseComment: string;
  casePreviewImage: string;
  caseImages: [
    {
      asset: {
        url: string;
      };
    }
  ];
}
