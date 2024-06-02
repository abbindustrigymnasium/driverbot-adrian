<script lang="ts">
    import StatFunctions from "../../components/statFunctions.svelte";
import { DriveDistance, DriveTime, timesConnected } from "../../stores/store";

    

</script>
<StatFunctions></StatFunctions>
<div class=" flex-col w-full h-full justify-center">

    <div class=" w-full flex content-center justify-center mt-2">
        <strong class=" text-2xl">DriverBot Stats</strong>
    </div>
    <div class=" w-full">
        <p>Distance Driven: {$DriveDistance}meters</p>
        <p>Time on Road: {$DriveTime}seconds</p>
        <p>Times Successfully connected to driverbot: {$timesConnected}</p>
    </div>
    
    

</div>