export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MASQ-OS",
  description: "MASQ-OS is a free and open-source operating system for the modern web.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Download",
      href: "/download",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
		label: "Home",
		href: "/",
	  },
	  {
		label: "Docs",
		href: "/docs",
	  },
	  {
		label: "Download",
		href: "/download",
	  },
	  {
		label: "About",
		href: "/about",
	  },
  ],
  links: {
    github: "https://github.com/redoxahmii",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
