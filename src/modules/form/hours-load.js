import { openingHours } from "../../utils/opening-hours"
import dayjs from "dayjs"
import { hoursClick } from "./hours-click"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }){
    // limpa a lista de horarios
    hours.innerHTML = ""

    // Obtém a lista de todos os horários ocupados.
    const unavailableHours = dailySchedules.map((schedule) =>
       dayjs(schedule.when).format("HH:mm")
    )

    console.log(unavailableHours)

    const opening = openingHours.map((hour) =>{
        //Recupera somente a hora
        const [scheduleHour] = hour.split(":")
        
        // Add a hora na data e verificar se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        
        // só vai ser disponível se não for um horário agendado ou se não está no passado 
        const available = !unavailableHours.includes(hour) && !isHourPast
        return{
            hour,
            available
        }
    })
    
    // Renderizar os horários
    opening.forEach( ({hour, available}) =>{
        const li = document.createElement("li")

        li.classList.add("hour")
        // Usando operador ternário se disposível cai na esq senão dir
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        
        li.textContent = hour

        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        }else if(hour === "13:00"){
            hourHeaderAdd("Tarde")
        }else if(hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    // Add o evento de click nos horários disponíveis
    hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}