import { Cog, HomeIcon } from "lucide-react";
import { type SidebarLinkProps } from "@/components/sidebar-items";

type AdditionalLinks = {
  title: string;
  links: SidebarLinkProps[];
};

export const defaultLinks: SidebarLinkProps[] = [
  { href: "/dashboard", title: "Home", icon: HomeIcon },
  { href: "/settings", title: "Settings", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [];
