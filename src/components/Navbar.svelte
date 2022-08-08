<script lang="ts">
    import Logo from "$lib/icons/Logo.svelte";
</script>

<nav class="nav-container flex">
    <div class="logo">
        <Logo/>
    </div>
    <ul class="primary-navigation flex" id="primary-navigation">
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
    .logo {
        margin: 2rem;
    }

    .nav-container {
        align-items: center;
        justify-content: space-between;
    }

    .primary-navigation {
        @apply p-0;
        @apply m-0;
        list-style: none;
    }
</style>