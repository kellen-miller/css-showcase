<script lang="ts">
    import {faker} from "@faker-js/faker";
</script>

<div class="card-container">
    <img alt="product-image" src="{faker.image.imageUrl(3840, 2160, 'product', true)}}"/>
    <div class="card-content">
        <h2>{faker.commerce.productName()}</h2>
        <p>{faker.commerce.productDescription()}</p>
        <button>Learn More</button>
    </div>
</div>

<style lang="postcss">
    :root {
        --border-radius: 1rem;
    }

    .card-container {
        color: hsl(var(--foreground));
        background-color: hsl(var(--secondaryBg));
        width: 18rem;
        display: flex;
        flex-direction: column;
        border-radius: var(--border-radius);
        box-shadow: rgba(66, 148, 110, 0.15) 0px 4px 24px;

        > img {
            width: 100%;
            object-fit: cover;
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }

        > .card-content {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            padding: 1rem;

            > h2 {
                font-weight: 700;
            }

            > p {
                opacity: .8;
            }
        }

    }
</style>