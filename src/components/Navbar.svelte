<script lang="ts">
    import IconWrapper from "$components/IconWrapper.svelte";
    import {links} from "$data/nav-links.ts";
    import {setTheme, Theme, theme} from "$lib/stores/theme.ts";

    const logo = "rocket";
    let expanded = false;

    function handleClick() {
        expanded = !expanded;
    }

    function handleThemeChange() {
        setTheme($theme === Theme.Dark ? Theme.Light : Theme.Dark);
    }
</script>

<header>
    <div class="left-icons">
        <div class="logo">
            <IconWrapper height="3rem" icon={logo}/>
        </div>

        <div on:click={handleThemeChange}>
            <IconWrapper height="2rem" icon={$theme === Theme.Light ? "moon" : "sun"}/>
        </div>
    </div>

    <button aria-controls="nav-links"
            aria-expanded={expanded}
            on:click={handleClick}>
        <span class="sr-only">Menu</span>
        <IconWrapper icon={expanded ? "remove" : "menu"}/>
    </button>

    <nav>
        <ul class:expanded>
            {#each links as link, i}
                <li>
                    <a href={link.href}>
                        <span aria-hidden="true">0{i}</span>
                        {link.name}
                        <div class="icon">
                            <IconWrapper icon={link.icon} height="2rem"/>
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>

<style lang="postcss">
    @custom-media --mobile-vp-min (min-width: 35em);

    @custom-media --small-vp-max (max-width: 57em);

    @define-mixin flex $gap: 1em {
        display: flex;
        gap: var(--gap, $gap);
    }

    header {
        @mixin flex;
        height: var(--header-height);
        width: 100vw;
        padding-top: 10px;
        align-items: center;
        justify-content: space-between;
        color: hsl(var(--foreground));
    }

    .left-icons {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
    }

    button {
        display: block;
        position: absolute;
        z-index: 9999;
        width: 2rem;
        aspect-ratio: 1;
        top: 2rem;
        right: 2rem;

        @media (--mobile-vp-min) {
            display: none;
        }
    }

    ul {
        @mixin flex;
        flex-direction: column;
        --gap: 2rem;
        backdrop-filter: blur(1rem);
        font-size: 1.25rem;
        position: fixed;
        z-index: 1000;
        inset: 0 0 0 30%;
        padding: min(30vh, 10rem) 2em;
        transform: translateX(100%);
        transition: transform 350ms ease-out;
        background-color: hsl(var(--foreground), .1);

        & span[aria-hidden=true] {
            font-weight: bold;
            margin-inline-end: .5em;
            @media (--mobile-vp-min) and (--small-vp-max) {
                display: none;
            }
        }

        @media (--mobile-vp-min) {
            position: static;
            flex-direction: row;
            transform: translateX(0);
            inset: auto;
            transition: none;
            --gap: clamp(1rem, 3vw, 3rem);
            padding-block: 1.25rem;
            padding-inline: clamp(1rem, 2vw, 9rem);
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
</style>