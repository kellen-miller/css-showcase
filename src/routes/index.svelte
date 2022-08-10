<script lang="ts">
    import Card from "$components/cards/Card.svelte";
</script>
<div class="main-container">
    <Card/>
</div>

<style>
    .main-container {
        display: grid;
        min-height: calc(100vh - var(--header-height));
        place-items: center;
    }
</style>