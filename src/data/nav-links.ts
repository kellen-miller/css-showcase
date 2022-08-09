import type * as icons from "$lib/icons";

interface NavLinkType {
    name: string;
    href: string;
    icon: keyof typeof icons;
}

export const links: NavLinkType[] = [
    {
        name: "Home",
        href: "/",
        icon: "globe",
    },
    {
        name: "Destination",
        href: "/destination",
        icon: "planet",
    },
    {
        name: "Crew",
        href: "/crew",
        icon: "astronaut",
    },
    {
        name: "Technology",
        href: "/technology",
        icon: "dna",
    }
]