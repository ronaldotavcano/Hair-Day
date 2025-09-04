import { hoursLoad } from "../form/hours-load"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

// seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    //obtem a data do input
    const date = selectedDate.value

    // Buscar na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })
    console.log(dailySchedules)

    // Renderiza as horas disponíveis
    hoursLoad( {date} )
}