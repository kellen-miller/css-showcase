<script lang="ts">
    import "@/app.pcss";
    import Navbar from "$components/Navbar.svelte";
</script>

<Navbar/>
<slot></slot>

<style global lang="postcss">
    @import-glob "$styles/**/*.pcss";
</style>