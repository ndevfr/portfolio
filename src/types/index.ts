// types/index.ts

import { IconType } from "react-icons";

export interface ProjectTileProps {
  id: string;
  title: string;
  description: string;
  href: string;
  alert: string;
  capture: string;
  start: string;
  end: string;
  labels: string[];
  story: string;
}

export interface ProjectLinkProps {
  href: string;
  alert: string;
}

export interface SocialLinkProps {
  id: string;
  title: string;
  href: string;
  icon: IconType;
}
