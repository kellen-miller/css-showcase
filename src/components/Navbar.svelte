<script lang="ts">
    import Logo from "$lib/icons/Logo.svelte";
</script>

<nav class="nav-container">
    <div class="logo">
        <Logo/>
    </div>
    <ul>
        <li class="active">
            <a href="/">
                <span aria-hidden="true">00</span>Home
            </a>
        </li>
        <li>
            <a href="/">
                <span aria-hidden="true">01</span>Destination
            </a>
        </li>
        <li>
            <a href="/">
                <span aria-hidden="true">02</span>Crew
            </a>
        </li>
        <li>
            <a href="/">
                <span aria-hidden="true">03</span>Technology
            </a>
        </li>
    </ul>
</nav>

<style lang="postcss">
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 8vh;
    }
</style>