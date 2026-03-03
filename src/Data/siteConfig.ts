import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCode,
  IconHome,
  IconQuestionMark,
} from "@tabler/icons-react";

export interface NavLinkItem {
  link: string;
  label: string;
  icon?: typeof IconHome;
}

export interface SocialLinkItem {
  href: string;
  label: string;
  Icon: typeof IconBrandLinkedin;
}

export const profileConfig = {
  name: "Hunter Carver",
  role: "Software Engineer",
  phone: "361-946-7678",
  email: "hunter@1968bird.com",
} as const;

export const primaryNavLinks: NavLinkItem[] = [
  { link: "/", label: "Home", icon: IconHome },
  { link: "/about", label: "About", icon: IconQuestionMark },
  { link: "/projects", label: "Projects", icon: IconCode },
];

export const socialLinks: SocialLinkItem[] = [
  {
    href: "https://www.linkedin.com/in/hunter-carver/",
    label: "LinkedIn",
    Icon: IconBrandLinkedin,
  },
  {
    href: "https://github.com/huntertcarver",
    label: "GitHub",
    Icon: IconBrandGithub,
  },
  {
    href: "https://twitter.com/huntertcarver",
    label: "Twitter",
    Icon: IconBrandTwitter,
  },
  {
    href: "mailto:hunter@1968bird.com",
    label: "Email",
    Icon: IconBrandGmail,
  },
];
