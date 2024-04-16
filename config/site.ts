export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "$USADOG",
	description: "$USADOG official website.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
	],
	navAnchors: [
		{
			label: "Home",
			id: "home",
		},
		{
			label: "Why $USADOG",
			id: "why",
		},
		{
			label: "Get Started",
			id: "get-started",
		},
		{
			label: "Tokenomics",
			id: "tokenomics",
		},
		{
			label: "Roadmap",
			id: "roadmap"
		},
		{
			label: "Join",
			id: "join",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
	],
};
