import dayjs from "dayjs";

import {openingHours} from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad(date, dailySchedules){
    
    hours.innerHTML = "";

    const unnavailableHours = dailySchedules.map((schedule) => schedule.when.slice(11,16));

    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !unnavailableHours.includes(hour) && !isHourPast

        return({
            date,
            hour,
            available,
        })
    })

    opening.forEach(({hour, available}) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        //li.dataset.period = dayjs(hour.hour, "HH:mm").format("A").toLowerCase()
        li.value = hour
        li.innerText = hour

         if(hour === "09:00"){
            hourHeadAdd("Manhã")
        }else if(hour === "13:00"){
            hourHeadAdd("Tarde")
        }else if(hour === "18:00"){
            hourHeadAdd("Noite")
        }

        hours.append(li)
    })
    hoursClick()
    return opening
}

function hourHeadAdd(title){
    const header = document.createElement("li");

    header.classList.add("hour-period");
    header.textContent = title;

    hours.appendChild(header);
}