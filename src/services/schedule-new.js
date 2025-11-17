import {apiConfig} from "./api-config.js";

export async function scheduleNew({ id, name, when}) {

    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, name, when}),
        });
    
        alert("Agendamento criado com sucesso!");

        return await response.json();

    }catch(error){
        alert("Não foi possível conectar ao servidor");
    }

}