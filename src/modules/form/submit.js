import dayjs from "dayjs"
import { v4 as uuidv4 } from "uuid";

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday;
selectedDate.min = inputToday;


form.onsubmit = (event) => {
    event.preventDefault()

    try{
        const name = clientName.value.trim();

        if(!name){
            alert("Por favor, informe o nome do cliente.")
            clientName.focus()
            return
        }

        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected){
            alert("Por favor, selecione um horário para o atendimento.")
            return
        }

        const [hour] = hourSelected.innerText.split(":")
        
        const whenSched = dayjs(selectedDate.value).add(hour, "hour").format("DD-MM-YYYY HH:00")
        
        const idWhenSched = uuidv4()

        console.log({
            idWhenSched,
            whenSched,
            name})


    }catch(error){
        alert("Form submission error:", error)
    }
}