<script>
    import { onMount } from 'svelte';
  
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
      };
      document.body.appendChild(joyScript);
    });
  </script>
  
  

    <div class=" w-1/2 aspect-square" id="joyDiv">

    </div>


