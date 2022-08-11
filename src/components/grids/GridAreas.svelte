<section>
    <header>header</header>
    <div class="content">content</div>
    <aside>aside</aside>
    <footer>footer</footer>
</section>

<style lang="postcss">
    section {
        color: white;
        min-height: 100vh;
        padding-block: 1em;
        display: grid;
        grid-template-areas:
            "header"
            "content"
            "aside"
            "footer";

        @media (min-width: 35em) {
            grid-template-areas:
                "header header"
                "content aside"
                "footer footer";
        }

        & * {
            height: inherit;
        }
    }

    header {
        grid-area: header;
        background-color: #00a3ff;
    }

    .content {
        grid-area: content;
        background-color: #6b7280;
    }

    aside {
        grid-area: aside;
        background-color: #ffc107;
    }

    footer {
        grid-area: footer;
        background-color: darkviolet;
    }
</style>