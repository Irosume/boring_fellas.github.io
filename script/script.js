const dayContainer = document.querySelector(".days"); // Use ".days" for class selection

let days = "";

// for (let date = 1; date <= 30; date++) {
    for (let date = 1; date <= 30; date++) {
        if(date < 10){
            days += `<span class="dayStyle" id="day">0${date}</span> `
            continue
        } 
    days += `<span class="dayStyle" id="day">${date}</span>`;
    // if (date == 7){
    //     break;
    // } else if(date == )
}

const eventsli = document.querySelectorAll(".events-li")

for(let i = 0; i < eventsli.length; i++){    
    eventsli[i].addEventListener("click", () => {
        eventsli[i].classList.toggle("active")
    })
}

dayContainer.innerHTML = days;

// dayContainer.innerHTML = days;