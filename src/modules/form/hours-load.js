import { openingHours } from "../../utils/opening-hours"
import dayjs from "dayjs"

const hours = document.getElementById("hours")

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
    
    // Renderizar os horários
    opening.forEach( ({hour, available}) =>{
        const li = document.createElement("li")

        li.classList.add("hour")
        // Usando operador ternário se disposível cai na esq senão dir
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        
        li.textContent = hour
        hours.append(li)
    })
}