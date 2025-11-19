import { apiConfig } from "./api-config";

export async function scheduleCancel({id}) {
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to cancel the schedule.');
        }
        alert("Agendamento cancelado com sucesso");
        return true;
    } catch (error) {
        alert("Não foi possível conectar ao servidor");
        return false;
    }
}