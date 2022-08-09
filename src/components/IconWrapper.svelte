<script lang="ts">
    import * as icons from "$lib/icons";
    import * as transitions from "svelte/transition";

    export let icon: string = "notFound";
    export let height: string;
    export let width: string;
    export let aspectRatio: string;
    export let transition: keyof typeof transitions;
    export let transitionProps: any = {};

</script>

<div style:aspect-ratio={aspectRatio}
     style:height
     style:width
>
    {#if transition && transitionProps}
        <div transition:transition={transitionProps}>
            <svelte:component this={icons[icon]}/>
        </div>
    {:else}
        <div transition:transition>
            <svelte:component this={icons[icon]}/>
        </div>
    {/if}
</div>


