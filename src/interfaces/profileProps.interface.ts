export interface IPortfolioProps {
  tags: string[];
  title: string;
  mainImage: {
    url: string;
    alt: string;
  }
  content: {
    problemDesc: string[];
    problemSolvDesc: {
      title: string;
      text: string[];
    };
    benefits: {
      icon: string;
      desc: string;
      bonus: string;
    };
  };
}
