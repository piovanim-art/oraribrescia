function updateClock(){

    const now = new Date();

    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');

    document.getElementById('clock').innerHTML =
    `${hours}:${minutes}`;

    const options = {
        weekday:'long',
        day:'numeric',
        month:'long',
        year:'numeric'
    };

    const date =
    now.toLocaleDateString('it-IT',options);

    document.getElementById('date').innerHTML =
    date.toUpperCase();
}

setInterval(updateClock,1000);

updateClock();