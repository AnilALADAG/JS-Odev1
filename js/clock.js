function askName(){
    name = prompt("Lütfen isminizi girin:");
    document.querySelector('#myName').innerText = name;
}

function showTime(){
    let today = new Date();

    let currentDay = today.getDay();
    switch(currentDay){
        case 0:
            currentDay = 'Pazar'
            break;
        case 1:
            currentDay = 'Pazartesi'
            break;
        case 2:
            currentDay = 'Salı'
            break;
        case 3:
            currentDay = 'Çarşamba'
            break;
        case 4:
            currentDay = 'Perşembe'
            break;
        case 5:
            currentDay = 'Cuma'
            break;
        case 5:
            currentDay = 'Cumartesi'
            break;
    }

    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} ${currentDay}`

    document.querySelector('#myClock').innerHTML = time

    setTimeout(showTime, 1000);
}
askName();
showTime();