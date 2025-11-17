import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay(date) {

    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules`);

        const data = await response.json();

        const dateFormated = dayjs(date).format("DD-MM-YYYY");

        const dailySchedules = data.filter(item => {
            const dateOnly = item.when.split(" ")[0]; // "17-11-2025"
            return dateOnly === dateFormated;
        });

        return dailySchedules;
    
    }catch(error){
        alert("Não foi possível conectar ao servidor");
    }

}   