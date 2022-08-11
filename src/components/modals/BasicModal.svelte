<script lang="ts">
    import {faker} from "@faker-js/faker";
</script>

<div class="modal-container">
    <img alt="product-image" src="{faker.image.imageUrl(3840, 2160, 'product', true)}}"/>
    <div class="modal-content">
        <h2>{faker.commerce.productName()}</h2>
        <p>{faker.commerce.productDescription()}</p>
        <button></button>
    </div>
</div>

<style lang="postcss">
    .modal-container {
        background-color: var(--clr-neutral-100);
        width: 20vw;
        aspect-ratio: .7;
    }

    img {
        width: 100%;
        object-fit: cover;
    }
</style>