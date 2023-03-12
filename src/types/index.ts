// types/index.ts

export type StaticProps = {
  websites: ProjectProps[];
  projects: ProjectProps[];
};

export type WebsitesProps = {
  websites: ProjectProps[];
};

export type ProjectProps = {
  content?: string;
  slug: string;
  title: string;
  description: string;
  link: string;
  message: string;
  startDate: string;
  endDate: string;
  tags: string[];
  source: string;
  folder: string;
};

export type ProjectLinkProps = {
  href: string;
  alert: string;
};
