export interface INavListProps {
  anchor: string;
  anchorText: string;
  anchorDesc: string;
}

export interface INavOptions {
  options: INavListProps[];
  navListStyles?: string;
}
