<script lang="ts">
    import { onSend, startConnect, startDisconnect} from "../stores/mqttStore";
    import { isConnected } from "../stores/store";

    function sendMessage(msg: string)
    {
        const message = msg === "Hej" ? "Hej": "";

        onSend("sten", message)
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
    <button type="button" class="btn variant-filled-primary" on:click={() => sendMessage("Hej")}>Send Message</button>
</div>
    
<style>

</style>