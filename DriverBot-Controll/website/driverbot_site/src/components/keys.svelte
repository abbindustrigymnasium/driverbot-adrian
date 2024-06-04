<script lang="ts">
    import { onMount } from "svelte";
    import { onSend } from "../stores/mqttStore";
    import { isConnected, isMoving } from "../stores/store";
    import StatFunctions from "./statFunctions.svelte";
    let funcs: StatFunctions; 
    
    //Send key down to broker and calculate difrent stats.
    function handleKeyDown(key: string)
    {
        if ($isConnected)
        {
            onSend("key_down", key);
            if (key == "w" || key == "s")
            {
                isMoving.set(true);
                funcs.calcStats();
            }
        }
         else
        {
            console.log("not connected!")
        }
        
    }

    //Send key up to broker and show car not moving
    function handleKeyUp(key: string)
    {
        if ($isConnected)
        {
            onSend("key_up", key);
            if (key == "w" || key == "s")
            {
                isMoving.set(false);
            }
        }
         else
        {
            console.log("not connected!")
        }
        
    }

    onMount(()=> {
        addEventListener("keydown", event => {
            //disables key spam when key is held down
            if (event.repeat) return;
            //Handles valid key presses
            switch(event.key)
            {
                case "w":
                case "a":
                case "s":
                case "d":
                    handleKeyDown(event.key);
                    break;
            }
            
        })
        addEventListener("keyup", event => {
            switch(event.key)
            {
                case "w":
                case "a":
                case "s":
                case "d":
                    handleKeyUp(event.key);
                    break;
            }
            
        })
    })

</script>
<!-- Bind component to local variable -->
<StatFunctions bind:this={funcs}></StatFunctions>


<div>
    
    <div class=" flex-col justify-center items-center">
        <div class="flex justify-center *:my-1">
            <button class=" variant-filled-primary size-16"
                on:mousedown={() => handleKeyDown("w")}
                on:mouseup={()=> handleKeyUp("w")}>
                W
            </button>
        </div>
        <div class="flex">
            <button
                class=" variant-filled-primary size-16"
                on:mousedown={() => handleKeyDown("a")}
                on:mouseup={()=> handleKeyUp("a")}>
                A
            </button>
    
            <button 
                class=" variant-filled-primary size-16 mx-1"
                on:mousedown={() => handleKeyDown("s")}
                on:mouseup={()=> handleKeyUp("s")}>
                
                S
            </button>
    
            <button class=" variant-filled-primary size-16"
                on:mousedown={() => handleKeyDown("d")}
                on:mouseup={()=> handleKeyUp("d")}>
                D
            </button>
        </div>
    </div>
</div>