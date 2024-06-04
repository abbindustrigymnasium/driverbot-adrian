<script lang="ts">
    import { DriveDistance, DriveTime, isMoving } from "../stores/store";


// wheel:
        // ɵ35mm 
        // circumference: 110mm 
        // motor:
        //  5V
        // 100% pwm
        // ~200rev/min
        // calculation: 
        // (circumference(mm) * rev/ms)/1000 = distance(m)/ms

        //updates stats every milisecond based on dimensions of motor and wheel
    export async function calcStats()
    {
        while($isMoving)
        {
            DriveDistance?.set($DriveDistance + (110 * (200/60000))/1000)
            DriveTime?.update(value => value += 1/1000)
            console.log($DriveDistance)
           await new Promise(f => setTimeout(f, 1)) 
        }
    }
</script>