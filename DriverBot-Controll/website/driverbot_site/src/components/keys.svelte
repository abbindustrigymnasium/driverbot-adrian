<script lang="ts">
    import { onMount } from "svelte";
    import { onSend } from "../stores/mqttStore";
    import { isConnected } from "../stores/store";

    function handleKeyDown(key: string)
    {
        if ($isConnected)
        {
            console.log(key + " down");
            onSend("key_down", key);
        }
         else
        {
            console.log("not connected!")
        }
        
    }
    function handleKeyUp(key: string)
    {
        if ($isConnected)
        {
            console.log(key + " up");
            onSend("key_up", key);
        }
         else
        {
            console.log("not connected!")
        }
        
    }

    onMount(()=> {
        addEventListener("keydown", event => {
            if (event.repeat) return;
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


<div>
    
    <div class=" flex-col justify-center items-center">
        <div class="flex justify-center *:my-1">
            <button class=" variant-filled-primary size-16">
                W
            </button>
        </div>
        <div class="flex">
            <button class=" variant-filled-primary size-16">
                A
            </button>
    
            <button class=" variant-filled-primary size-16 mx-1">
                S
            </button>
    
            <button class=" variant-filled-primary size-16">
                D
            </button>
        </div>
    </div>
</div>