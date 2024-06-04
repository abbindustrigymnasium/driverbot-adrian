<script lang="ts">
    import { startConnect} from "../stores/mqttStore";
    import { isConnected, isKeymode, dummyRefresher } from "../stores/store";
  import { onMount } from "svelte";
    

    //Switch between Keys and joystick Keymode(true) = keys | Keymode(false) = joystick
    function toogleKeymode()
    {
        isKeymode.update(value => !value);
        console.log($isKeymode)
    }

    //refresh component on window resize (check dummyRefresher decleration for more info)
    onMount(()=> {
        addEventListener("resize", event => {
        dummyRefresher.update(value => value+=1);
        
    })
    return ()=> {
            removeEventListener("resize", event => {
                dummyRefresher.update(value => value+=1);
            })
        }
    })
    
</script>

<div class=" text-center flex flex-col items-center">
    {#if $isConnected}
        <div class=" bg-green-500 w-24 h-24 rounded-full content-center border-8 border-gray-500">
            <p class=" text-white text-[0.75rem] text-center">Connection Status</p>
        </div>
    {:else}
        <div class=" bg-red-500 w-24 h-24 rounded-full content-center border-8 border-gray-500">
            <p class=" text-white text-[0.75rem] text-center">Connection Status</p>
        </div>
    {/if}
    
    <button type="button" class="btn variant-filled-primary my-2" disabled={$isConnected} on:click={startConnect}>Connect</button>
    <button type="button" class="btn variant-filled-primary my-2" on:click={() => toogleKeymode()}>Switch Mode</button>
</div>
    
<style>

</style>