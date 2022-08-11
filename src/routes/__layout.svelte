<script lang="ts">
    import "@/app.pcss";
    import Navbar from "$components/Navbar.svelte";
</script>

<div class="app-container">
    <Navbar/>
    <slot></slot>
</div>

<style global lang="postcss">
    body {
        line-height: 1.6;
        background-image: url("https://source.unsplash.com/random/3840x2160/?space");
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        overflow-x: hidden;
    }
</style>