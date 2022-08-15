<script lang="ts">
    import ProductCard from "$components/cards/ProductCard.svelte";
    import ContentCard from "$components/cards/ContentCard.svelte";
    import AnimatedCard from "$components/cards/AnimatedCard.svelte";
</script>
<div class="main-container">
    <AnimatedCard/>
    <ContentCard/>
    <ProductCard/>
</div>

<style lang="postcss">
    .main-container {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        min-height: calc(100vh - var(--header-height));
    }
</style>