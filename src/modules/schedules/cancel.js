import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel";

const periods = document.querySelectorAll('.period');

periods.forEach((period) => {
    period.addEventListener('click', async (event) => {
        if (event.target.classList.contains('cancel-icon')) {
            const item = event.target.closest("li");

            const { id } = item.dataset;

            if(id) {
                const isConfirmed = confirm(`Tem certeza que deseja cancelar o agendamento?`);
                if(isConfirmed) {
                    await scheduleCancel({id});
                    schedulesDay();
                }
            }
        }
    })
        
})
/* periods.forEach(period => {
    const cancelButton = period.querySelector('.cancel-button');

    cancelButton.addEventListener('click', () => {
        const periodId = period.getAttribute('data-period-id');

        fetch(`/schedules/cancel/${periodId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.ok) {
                period.classList.add('canceled');
                cancelButton.disabled = true;
                cancelButton.textContent = 'Canceled';
            } else {
                console.error('Failed to cancel the period.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}); */