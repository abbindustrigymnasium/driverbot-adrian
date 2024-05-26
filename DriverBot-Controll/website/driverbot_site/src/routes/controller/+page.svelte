<script lang="ts">
   import Joystick from "../../components/joystick.svelte";
  import Keys from "../../components/keys.svelte";
   import Mqttbuttons from "../../components/mqttbuttons.svelte";
    import { isKeymode, dummyRefresher } from "../../stores/store";
</script>

<div class=" flex w-full h-full">
    {#key $dummyRefresher}
    {#if $isKeymode }
    <div class=" w-1/2 h-full flex justify-center items-center">
        <Keys></Keys>
    </div>
{:else}
    <div class=" w-1/2 h-full flex justify-center items-center">
        <Joystick></Joystick>
    </div>
{/if}
    {/key}
    
    
    <div class=" flex justify-center items-center h-full w-1/2">

    
        <svelte:component this={Mqttbuttons}/>
        
    </div>
</div>


    

