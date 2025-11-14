import {hoursLoad} from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export function schedulesDay() {
    const dateSelected = selectedDate.value

    hoursLoad(dateSelected)
}