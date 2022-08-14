<script lang="ts">
    import * as icons from "$lib/icons";
    import * as transitions from "svelte/transition";

    export let icon: keyof typeof icons;
    export let height: string = "100%";
    export let width: string = "100%";
    export let aspectRatio: string = "1";
    export let transition: keyof typeof transitions = undefined;
    export let transitionProps: any = undefined;
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


