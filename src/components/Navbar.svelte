<script lang="ts">
    import Rocket from "$lib/icons/Rocket.svelte";
    import Menu from "$lib/icons/Menu.svelte";
    import Remove from "$lib/icons/Remove.svelte";
    import {links} from "$components/nav-links.ts";

    let closed = true;

    function handleClick() {
        closed = !closed;
    }
</script>

<header class="header-container flex">
    <div class="logo">
        <Rocket/>
    </div>

    <button aria-controls="nav-links"
            aria-expanded={closed}
            class="mobile-nav-toggle" on:click={handleClick}>
        <span class="sr-only">Menu</span>
        <svelte:component this={closed ? Menu : Remove}/>
    </button>

    <nav>
        <ul class="nav-links flex"
            class:closed
            id="nav-links">

            {#each links as link, i}
                <li>
                    <a href={link.href}>
                        <span aria-hidden="true">0{i}</span>
                        {link.name}
                        <div class="icon">
                            <svelte:component this={link.icon}/>
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>

<style lang="postcss">

    .header-container {
        height: 10vh;
        width: 100%;
        margin-top: 10px;
        align-items: center;
        justify-content: space-between;
    }

    .mobile-nav-toggle {
        display: none;

        @media (max-width: 35em) {
            display: block;
            position: absolute;
            z-index: 9999;
            width: 2rem;
            aspect-ratio: 1;
            top: 2rem;
            right: 2rem;
        }
    }

    .nav-links {
        background-color: hsl(0, 0%, 100%, .1);
        backdrop-filter: blur(1rem);
        font-size: 18px;

        & span[aria-hidden=true] {
            font-weight: bold;
            margin-inline-end: .5em;

            @media (min-width: 35em) and (max-width: 55em) {
                display: none;
            }
        }

        & li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;
        }

        @media (max-width: 35em) {
            --gap: 2rem;
            position: fixed;
            z-index: 1000;
            inset: 0 0 0 30%;
            flex-direction: column;
            padding: min(30vh, 10rem) 2em;
            transform: translateX(0);
            transition: transform 350ms ease-out;
        }

        @media (min-width: 35em) {
            --gap: clamp(1.5rem, 5vw, 3rem);
            padding-block: 1.25rem;
            padding-inline: clamp(3rem, 10vw, 10rem);
        }
    }

    .logo {
        margin: 2rem;
        height: 3rem;
        aspect-ratio: 1;
    }

    .closed {
        transform: translateX(100%);
    }

    .icon {
        height: 2rem;
        aspect-ratio: 1;
    }
</style>