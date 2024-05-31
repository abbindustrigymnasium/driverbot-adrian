<script lang="ts">
    import { onSend, startConnect, startDisconnect} from "../stores/mqttStore";
    import { isConnected, isKeymode, dummyRefresher, DriveDistance } from "../stores/store";
  import { onMount } from "svelte";
    

    function sendMessage(msg: string)
    {
        const message = msg === "Hej" ? "Hej": "";

        onSend("key_down", message)
    }

    
    function toogleKeymode()
    {
        isKeymode.update(value => !value);
        console.log($isKeymode)
    }

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

    function incrementDriveDistance()
    {
        DriveDistance.update(value => value+=1);
    }
    


    
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
    <button type="button" class="btn variant-filled-primary" on:click={() => incrementDriveDistance()}>Send Message</button>
    <button type="button" class="btn variant-filled-primary my-2" on:click={() => toogleKeymode()}>Switch Mode</button>
</div>
    
<style>

</style>