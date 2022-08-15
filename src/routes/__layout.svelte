<script lang="ts">
    import "@/app.pcss";
    import Navbar from "$components/Navbar.svelte";
    import {theme} from "$lib/stores/theme.ts";
</script>

<div class="app-container {$theme}">
    <Navbar/>
    <slot></slot>
</div>

<style lang="postcss">
    .app-container {
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        overflow-x: hidden;
    }

    .app-container {
        color: hsl(var(--foreground));
        background-color: hsl(var(--background));
    }
</style>
<!--background-image: url("https://source.unsplash.com/random/3840x2160/?space");-->