<script lang="ts">
    import BasicGrid from "$components/grids/BasicGrid.svelte";
</script>
<div class="main-container">
    <BasicGrid/>
</div>

<style>
    .main-container {
        min-height: calc(100vh - var(--header-height));
        place-items: center;
    }
</style>