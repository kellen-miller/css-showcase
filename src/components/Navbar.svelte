<script lang="ts">
    import {menu} from "$lib/icons";
    import IconWrapper from "$components/IconWrapper.svelte";
    import {links} from "$data/nav-links.ts";

    const logo = "rocket";
    let expanded = false;

    function handleClick() {
        expanded = !expanded;
    }
</script>

<header>
    <div class="logo">
        <IconWrapper
              aspectRatio="1"
              height="3rem"
              icon={logo}
              transition="fade"
        />
    </div>

    <button aria-controls="nav-links"
            aria-expanded={expanded}
            on:click={handleClick}>
        <span class="sr-only">Menu</span>
        <IconWrapper icon={expanded ? "remove" : "menu"} transition="fade"/>
    </button>

    <nav>
        <ul class:expanded>
            {#each links as link, i}
                <li>
                    <a href={link.href}>
                        <span aria-hidden="true">0{i}</span>
                        {link.name}
                        <div class="icon">
                            <IconWrapper icon={link.icon} height="2rem" aspectRatio="1"/>
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>

<style lang="postcss">
    @define-mixin flex $gap: 1em {
        display: flex;
        gap: var(--gap, $gap);
    }

    header {
        @mixin flex;
        height: var(--header-height);
        width: 100vw;
        color: hsl(0, 0%, 95%);
        margin-top: 10px;
        align-items: center;
        justify-content: space-between;
    }

    button {
        display: block;
        position: absolute;
        z-index: 9999;
        width: 2rem;
        aspect-ratio: 1;
        top: 2rem;
        right: 2rem;

        @media (min-width: 35em) {
            display: none;
        }
    }

    ul {
        @mixin flex;
        background-color: hsl(0, 0%, 100%, .1);
        backdrop-filter: blur(1rem);
        font-size: 24px;

        & span[aria-hidden=true] {
            font-weight: bold;
            margin-inline-end: .5em;

            @media (min-width: 35em) and (max-width: 55em) {
                display: none;
            }
        }

        @media (max-width: 35em) {
            --gap: 2rem;
            position: fixed;
            z-index: 1000;
            inset: 0 0 0 30%;
            flex-direction: column;
            padding: min(30vh, 10rem) 2em;
            transform: translateX(100%);
            transition: transform 350ms ease-out;
        }

        @media (min-width: 35em) {
            --gap: clamp(1.5rem, 5vw, 3rem);
            padding-block: 1.25rem;
            padding-inline: clamp(3rem, 10vw, 10rem);
        }
    }

    li > a {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon {
        margin-left: .25em;
    }

    .expanded {
        transform: translateX(0%);
    }

    .logo {
        margin: 2rem;
    }
</style>