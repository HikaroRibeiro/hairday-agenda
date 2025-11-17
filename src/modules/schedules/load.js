import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    const dateSelected = selectedDate.value

    let dailySchedules = await scheduleFetchByDay(dateSelected)
    console.log(dailySchedules)

    hoursLoad(dateSelected)
}