export function hoursClick(){
    
    const hours = document.querySelectorAll(".hour-available");

    hours.forEach((hourAvailable) => {

        hourAvailable.addEventListener("click", (selected) => {
            hours.forEach((hour) => hour.classList.remove("hour-selected"))

            selected.target.classList.add("hour-selected");
        })

    })
    
}