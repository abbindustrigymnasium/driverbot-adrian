<script lang="ts">
    import { onMount } from 'svelte';
    import { onSend } from '../stores/mqttStore';
    import { isConnected } from '../stores/store';
    /**
     * @type {string}
     */
    var joyDir:string;
  
    onMount(async () => {
      // Dynamically import the joy.js library
      const joyScript = document.createElement('script');
      joyScript.src = 'https://bobboteck.github.io/joy/joy.js';
      joyScript.onload = () => {
        // Initialize and use the joy.js library
        const options = {
            internalFillColor: "#00ADB5",
            externalStrokeColor: "#00ADB5",
            externalLineWidth: 4,
          // Your joystick options
        };
        const joy = new JoyStick('joyDiv', options);
        // You can now use the joy instance as needed

        setInterval(function(){
          if (joyDir !== joy.GetDir())
          {
            joyDir = joy.GetDir();
            handleJoyInput(joyDir);


          }
          
        }, 50);
        


      };
      document.body.appendChild(joyScript);
    });
    function handleJoyInput(input: string)
    {
      if ($isConnected)
      {
      //   if (input.length > 1)
      // {
      //   input = input[0];
      // }
      console.log("input: " + input)
      onSend("joy_stick", input)
      }
      else
          {
            console.log("not Connected!");
          }
    }
  </script>
  
  

    <div class=" w-1/2 aspect-square" id="joyDiv">

    </div>


