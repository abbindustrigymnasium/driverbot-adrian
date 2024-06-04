<script lang="ts">
    import { onMount } from "svelte";
   import Joystick from "../../components/joystick.svelte";
  import Keys from "../../components/keys.svelte";
   import Mqttbuttons from "../../components/mqttbuttons.svelte";
    import { isKeymode, dummyRefresher } from "../../stores/store";
    import ForceLandscape from "../../components/forceLandscape.svelte";
    let isLandscape = false
    onMount(()=>{
        addEventListener("orientationchange", event => {
            if(window.innerHeight > window.innerWidth){
                isLandscape = true;
                console.log("landscape")
            }
            else
            {
                isLandscape = false;
                console.log("not landscape")
            }
        })
    })
    

</script>
{#if !isLandscape}
<div class="w-full h-full bg-red-500 absolute flex items-center justify-center">
    <p>Please Use Landscape mode!</p>
</div>
{/if}

<div class=" flex w-full h-full">
    <!-- Loads the right controller based on Keymode value
    Dummy refresher acts as a dummy which triggers a refresh for the canvas which draws the joystick -->
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


    

