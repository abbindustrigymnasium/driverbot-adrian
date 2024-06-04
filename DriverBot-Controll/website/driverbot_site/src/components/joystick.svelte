<script lang="ts">
    import { onMount } from 'svelte';
    import { onSend } from '../stores/mqttStore';
    import { isConnected, isMoving } from '../stores/store';
    /**
     * @type {string}
     */


    var joyDir:string;
  
    onMount(async () => {
      // Dynamically import the joy.js library
      const joyScript = document.createElement('script');
      joyScript.src = 'https://bobboteck.github.io/joy/joy.js';
      joyScript.onload = () => {
        // Initializethe joy.js library
        const options = {
            internalFillColor: "#00ADB5",
            externalStrokeColor: "#00ADB5",
            externalLineWidth: 4,
        };
        const joy = new JoyStick('joyDiv', options);

        //Get position data of joystick every 50ms
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
        //Set the car State to moving if joystick not centered
        //Sedns position data to broker as cardinal directions including C as center
      if (input == "C")
      {
        isMoving.set(false);
      }
      else
      {
        isMoving.set(true);
      }
      console.log("input: " + input)
      onSend("joy_stick", input)
      }
      else
          {
            console.log("not Connected!");
          }
    }
  </script>
  
  
<!-- Div where Joystick is placed when initilized -->
    <div class=" w-1/2 aspect-square" id="joyDiv">

    </div>


