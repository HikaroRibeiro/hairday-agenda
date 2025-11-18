import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodEvening = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {  
    try {
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodEvening.innerHTML = "";
        
        dailySchedules.forEach(schedule => {
            const item = document.createElement("li");
            const time = document.createElement("strong");
            const name = document.createElement("span");
            const cancelIcon = document.createElement("img");

            const hourOnly = schedule.when.split(" ")[1];

            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Botão para Cancelar")
            cancelIcon.classList.add("cancel-icon");

            item.setAttribute("data-id", schedule.id);
            time.textContent = hourOnly;
            name.textContent = schedule.name;

            item.append(time, name, cancelIcon);

            const formatedHour = parseInt(hourOnly.split(":")[0]);

            if (formatedHour >= 9 && formatedHour <= 12) {
                periodMorning.appendChild(item);
            } else if (formatedHour > 12 && formatedHour <= 18) {
                periodAfternoon.appendChild(item);
            } else if (formatedHour > 18 && formatedHour <= 21) {
                periodEvening.appendChild(item);
            }
        
        })
        
        // Sugerido pela IA:
        
        /* dailySchedules.forEach(schedule => {
          
            const hourOnly = schedule.when.split(" ")[1];

            const scheduleItem = `
                <li>
                    <strong>${hourOnly}</strong>
                    <span>${schedule.name}</span>
                    <img
                        src="./src/assets/cancel.svg"
                        alt="Cancelar"
                        class="cancel-icon"
                    />
                </li>
            `;
            
            const parsedDate = parseInt(hourOnly.split(":")[0]);

            if (parsedDate >= 9 && parsedDate < 12) {
                periodMorning.innerHTML = scheduleItem;
            } else if (parsedDate >= 13 && parsedDate < 18) {
                periodAfternoon.innerHTML += scheduleItem;
            } else if (parsedDate >= 19 && parsedDate <= 21) {
                periodEvening.innerHTML += scheduleItem;
            }
        }); */

    }catch (error) {
        console.error("Erro ao exibir os agendamentos:", error);
    }

}