import { hoursLoad } from "../form/hours-load"

// seleciona o input de data
const selectedDate = document.getElementById("date")

export function schedulesDay(){
    //obtem a data do input
    const date = selectedDate.value

    // Renderiza as horas disponíveis
    hoursLoad( {date} )
}