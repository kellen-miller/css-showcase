<script lang="ts">
    import ContentCard from "$components/cards/ContentCard.svelte";
</script>

<section>
    {#each { length: 5 } as _, i}
        <ContentCard class="card" ref={`card-${i}`}/>
    {/each}
</section>

<style lang="postcss">
    :root {
        --clr-primary-400: hsl(263, 55%, 52%); /* purple */
        --clr-secondary-400: hsl(217, 19%, 35%); /* grey */
        --clr-secondary-500: hsl(219, 29%, 14%); /* black */
        --card-colors: --clr-primary-400, --clr-secondary-400, --clr-neutral-100, --clr-secondary-500;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-block: 2rem;
        width: min(95%, 70rem);
        margin-inline: auto;
        color: var(--clr-neutral-100);

        @media (min-width: 35em) {
            display: grid;
            grid-auto-columns: 1fr;
            grid-template-areas:
                "card-1 card-1"
                "card-2 card-5"
                "card-3 card-5"
                "card-4 card-4";
        }

        @media (min-width: 50em) {
            grid-template-areas:
                "card-1 card-1 card-2 card-5"
                "card-3 card-4 card-4 card-5";
        }
    }

    :global(.card) {
        &:nth-child(4n + 1) {
            grid-area: card-1;
            color: hsl(0, 28%, 5%);
            background-color: var(--clr-neutral-100);
        }

        &:nth-child(4n + 2) {
            grid-area: card-2;
            background-color: var(--clr-secondary-400);
        }

        &:nth-child(4n + 3) {
            grid-area: card-3;
            background-color: var(--clr-primary-400);
        }

        &:nth-child(4n + 4) {
            grid-area: card-4;
            background-color: var(--clr-secondary-500);
        }

        &:nth-child(5n) {
            grid-area: card-5;
        }
    }
</style>







