interface ISocialListProps {
  link: {
    href: string;
    alt: string;
  };
  icon: string;
}

export interface ISocialOptions {
  options: ISocialListProps[];
}
