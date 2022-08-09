<script lang="ts">
    import "@/app.pcss";
    import Navbar from "$components/Navbar.svelte";
</script>

<div class="shell">
    <Navbar/>
    <slot></slot>
</div>

<style global lang="postcss">
    body {
        color: hsl(0, 0%, 90%);
        background-image: url("/images/background.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        overflow-x: hidden;
    }
</style>