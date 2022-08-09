import Globe from "$lib/icons/Globe.svelte";
import Planet from "$lib/icons/Planet.svelte";
import Astronaut from "$lib/icons/Astronaut.svelte";
import DNA from "$lib/icons/DNA.svelte";

interface NavLinkType {
    name: string;
    href: string;
    icon: any;
}

export const links: NavLinkType[] = [
    {
        name: 'Home',
        href: '/',
        icon: Globe,
    },
    {
        name: 'Destination',
        href: '/destination',
        icon: Planet,
    },
    {
        name: 'Crew',
        href: '/crew',
        icon: Astronaut,
    },
    {
        name: 'Technology',
        href: '/technology',
        icon: DNA,
    }
]