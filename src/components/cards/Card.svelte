<div class="card">
    <div class="card-content">
        <h2>Something awesome</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nam?
        </p>
        <a class="button" href="/">Learn More</a>
    </div>
</div>

<style lang="postcss">
    :root {
        --clr-neutral-900: hsl(207, 19%, 9%);
        --clr-neutral-100: hsl(0, 0%, 95%);
        --clr-accent-400: hsl(267, 86%, 54%);
        --padding: 1.5rem;
    }

    .card {
        color: var(--clr-neutral-100);
        background-image: var(--random-image-url);
        background-size: cover;
        padding: 10rem 0 0 0;
        max-width: 35ch;
    }

    .card-content {
        padding: var(--padding);
        background-image: linear-gradient(
                hsl(0, 0%, 0%, 0),
                hsl(0, 0%, 0%, .3) 20%,
                hsl(0, 0%, 0%, 1)
        );
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
            bottom: 0;
            background-color: var(--clr-accent-400);
            border-radius: 1px;
        }
    }

    a {
        cursor: pointer;
        display: inline;
        color: var(--clr-neutral-900);
        background-color: var(--clr-accent-400);
        padding: .5em 1.25em;
    }
</style>