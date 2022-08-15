<script lang="ts">
    import {faker} from "@faker-js/faker";

    export let ref;
</script>

<article class={$$props.class} {ref}>
    <div class="card-head">
        <div>
            <img alt="John Doe" src="{faker.image.avatar()}">
        </div>
        <div>
            <h2 class="name">{faker.name.fullName()}</h2>
            <p class="position">{faker.name.jobTitle()}</p>
        </div>
    </div>
    <p>{faker.lorem.sentence()}</p>
    <p>{faker.lorem.text()}</p>
</article>

<style>
    :root {
        --fs-300: 0.6875rem;
        --fs-400: 0.8125rem;
        --fs-500: 1.25rem;
    }

    .card-head {
        display: flex;
        gap: 1rem;
    }

    article {
        background-color: hsl(var(--background));
        max-width: 18rem;
        font-size: 0.8125rem;
        padding: 2rem;
        border-radius: 0.5rem;
        @apply shadow-xl;
    }

    img {
        width: 1.75rem;
        aspect-ratio: 1;
        border-radius: 50%;
    }

    .name {
        font-size: var(--fs-400);
        font-weight: 600;
        line-height: 1;
    }

    .position {
        font-size: var(--fs-300);
        opacity: 0.5;
    }
</style>