<script lang="ts">
    import BasicModal from "$components/modals/BasicModal.svelte";
</script>
<div class="main-container">
    <BasicModal/>
</div>


<style>
    .main-container {
        display: grid;
        place-items: center;
        min-height: calc(100vh - var(--header-height));
        place-items: center;
    }
</style>