<script lang="ts">
    import ProductCard from "$components/cards/ProductCard.svelte";
</script>
<div class="main-container">
    <ProductCard/>
</div>

<style lang="postcss">
    .main-container {
        display: grid;
        place-items: center;
        min-height: calc(100vh - var(--header-height));
    }
</style>