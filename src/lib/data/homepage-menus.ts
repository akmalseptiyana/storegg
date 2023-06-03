export type HomepageMenuItem = {
  name: string;
  href: string;
  external?: boolean;
};

export const homepageMenus: HomepageMenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Games",
    href: "/games",
  },
  {
    name: "Rewards",
    href: "/rewards",
  },
  {
    name: "Discover",
    href: "/discover",
  },
  {
    name: "Global Rank",
    href: "/global-rank",
  },
];
