<script lang="ts">
    import {faker} from "@faker-js/faker";
    import {onMount} from "svelte";
    import {clickOutside} from "$lib/shared/clickOutside";

    let modal;

    onMount(() => {
        modal = document.querySelector("#modal");
    })

    function openModal() {
        modal.showModal();
    }

    function closeModal() {
        modal.close();
    }

</script>

<div class="card-container">
    <img alt="product-image" src="{faker.image.imageUrl(3840, 2160, 'product', true)}}"/>
    <div class="card-content">
        <h2>{faker.commerce.productName()}</h2>
        <p>{faker.commerce.productDescription()}</p>
        <button on:click={openModal}>Learn More</button>
    </div>
    <dialog class="modal" id="modal">
        <h2>{faker.commerce.productAdjective()}</h2>
        <p>{faker.commerce.productMaterial()}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, voluptatibus.</p>
        <button on:click={closeModal} on:clickoutside={closeModal} use:clickOutside>close</button>
    </dialog>
</div>

<style lang="postcss">
    :root {
        --border-radius: 1rem;
    }

    .card-container {
        color: hsl(var(--foreground));
        background-color: hsl(var(--background), 80%);
        width: 18rem;
        display: flex;
        flex-direction: column;
        border-radius: var(--border-radius);
        box-shadow: hsl(var(--purple-500), 0.25) 0px 4px 24px;

        > img {
            width: 100%;
            object-fit: cover;
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }

        > .card-content {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            align-items: center;
            padding: 1rem;

            > h2 {
                font-size: 1.25rem;
                font-weight: 700;
            }

            > p {
                font-size: .875rem;
                flex-grow: 1;
                opacity: .8;
            }
        }

        .modal {
            > h2 {
                font-size: 1.25rem;
                font-weight: 700;
            }
        }

        button {
            align-self: flex-end;
            color: hsl(0, 0%, 98%);
            background-color: hsl(var(--purple-500));
            border-radius: calc(var(--border-radius) / 2);
            padding: .5rem;
            font-size: .8rem;
            font-weight: 600;
            cursor: pointer;
        }
    }
</style>