import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {schedulesShow} from "../schedules/show.js"
import {hoursLoad} from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    const dateSelected = selectedDate.value

    let dailySchedules = await scheduleFetchByDay(dateSelected)
    
    schedulesShow({ dailySchedules })

    hoursLoad(dateSelected, dailySchedules)
}