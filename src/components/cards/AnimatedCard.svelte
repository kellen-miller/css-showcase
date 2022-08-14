<script lang="ts">
    import {spring} from "svelte/motion";

    let animateDuration = 500;
    let scale = spring(1, {
        stiffness: .2,
        damping: .15
    })

    $: style = `
        --scale: ${$scale};
        --animate-duration: ${animateDuration}ms;
     `

    function setScale(s: number) {
        scale.set(s);
    }
</script>

<div class="card"
     on:focusin={() => setScale(1.05)}
     on:focusout={() => setScale(1)}
     on:mouseenter={() => setScale(1.05)}
     on:mouseleave={() => setScale(1)}
     style={style}
>
    <div class="card-content">
        <h2>Something awesome</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi ducimus ex, fugit iste neque.
        </p>
        <a class="button" href="/">Learn More</a>
    </div>
</div>

<style lang="postcss">
    :root {
        --clr-neutral-900: 207, 19%, 9%;
        --clr-accent-400: 267, 86%, 54%;
        --padding: 1.5rem;
        --scale: 1;
        --animate-duration: 500ms;
    }

    .card {
        color: hsl(var(--clr-neutral-100));
        background-image: var(--random-image-url);
        background-size: cover;
        padding: 10rem 0 0 0;
        max-width: 35ch;
        @apply shadow-xl;
        border-radius: .5rem;
        overflow: hidden;
        transform: scale(var(--scale));
    }

    .card-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
        padding: var(--padding);
        background-image: linear-gradient(
                hsl(0, 0%, 0%, 0),
                hsl(0, 0%, 0%, .3) 20%,
                hsl(0, 0%, 0%, 1)
        );

        @media (hover) {
            transform: translateY(73%);
            transition: transform var(--animate-duration) ease;

            > *:not(h2) {
                opacity: 0;
                transition: opacity var(--animate-duration) linear;
            }

            .card:hover &, .card:focus-within & {
                transform: translateY(0%);
                transition-delay: var(--animate-duration);

                > *:not(h2) {
                    opacity: 1;
                    transition-delay: var(--animate-duration);
                }
            }

            .card:focus-within & {
                transition-duration: 0ms;
            }
        }
    }

    h2 {
        font-size: 1.35em;
        font-weight: bold;
        position: relative;
        width: max-content;
        max-width: 100%;

        &::after {
            content: '';
            position: absolute;
            width: calc(100% + var(--padding));
            height: 4px;
            left: calc(-1 * var(--padding));
            bottom: -2px;
            background-color: hsl(var(--clr-accent-400));;
            border-radius: 1px;
            transform-origin: left;
            transition: transform var(--animate-duration) ease;

            .card:hover &, .card:focus-within & {
                transform: scaleX(1);
            }

            @media (hover) {
                transform: scaleX(0);
            }
        }
    }

    p {
        color: hsl(var(--clr-neutral-100));
    }

    a {
        cursor: pointer;
        display: inline;
        color: hsl(var(--clr-neutral-900));
        background-color: hsl(var(--clr-accent-400));;
        padding: .35em 1em;
        border-radius: .25em;

        &:hover, &:focus, &:active {
            background-color: hsl(var(--clr-neutral-100));
        }
    }
</style>