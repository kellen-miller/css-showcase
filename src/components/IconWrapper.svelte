<script lang="ts">
    import * as icons from "$lib/icons";

    export let aspectRatio: string = "1";
    export let height: string = "100%";
    export let icon: keyof typeof icons;
    export let width: string = "100%";
</script>

<div style:aspect-ratio={aspectRatio}
     style:height
     style:width
>
    <svelte:component this={icons[icon]}/>
</div>


