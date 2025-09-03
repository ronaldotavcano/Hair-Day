import { openingHours } from "../../utils/opening-hours"
import dayjs from "dayjs"

export function hoursLoad({ date }){
    const opening = openingHours.map((hour) =>{
        //Recupera somente a hora
        const [scheduleHour] = hour.split(":")
        
        // Add a hora na data e verificar se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return{
            hour,
            available: isHourPast,
        }
    })
    console.log(opening)
}