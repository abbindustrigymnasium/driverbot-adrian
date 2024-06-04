<script lang="ts">
    import StatFunctions from "../../components/statFunctions.svelte";
import { DriveDistance, DriveTime, timesConnected } from "../../stores/store";

    function resetData()
    {
        DriveDistance?.set(0);
        DriveTime?.set(0);
        timesConnected?.set(0);
    }

</script>
<StatFunctions></StatFunctions>
<div class=" flex-col w-full h-full justify-center">

    <div class=" w-full flex content-center justify-center ">
        <strong class=" text-2xl">DriverBot Stats</strong>
    </div>
    <div class=" w-full">
        <p>Distance Driven: {$DriveDistance}meters</p>
        <p>Time on Road: {$DriveTime}seconds</p>
        <p>Times Successfully connected to driverbot: {$timesConnected}</p>
        <button class=" btn variant-ghost-error" on:click={()=> resetData()}>Reset Data</button>
    </div>
    
    

</div>