const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const ONE_SECOND = 1000 // in milisecond

function setTime() {
    const now = new Date();

    const second = now.getSeconds();
    // to move secondHand how many degrees per second
    const secondsDegrees = ((second / 60) * 360) + 90;  
    secondHand.style.transform = `translateY(-50%) rotate(${secondsDegrees}deg)`;

    // to ensure when secondHand reaches 12 o'clock, the hand doesnt look like it rotates back to 9 o'clock first 
    // (since 9 o'clock = 0 degree)
    if (secondsDegrees === 90) {    
        secondHand.style.transition = "none";
    } else {
        secondHand.style.transition = "all 0.05s";
    }

    const minute = now.getMinutes();
    // the minuteHand also moves a little bit every second
    const minutesDegrees = ((minute / 60) * 360) + ((second / 60) * 6) + 90;    
    minuteHand.style.transform = `translateY(-50%) rotate(${minutesDegrees}deg)`;

    if (minutesDegrees === 90) {
        minuteHand.style.transition = "none";
    } else {
        minuteHand.style.transition = "all 0.05s";
    }

    const hour = now.getHours();
    // hourHand moves a little bit every minute, every second
    const hoursDegrees = 
        ((hour / 12) * 360) + ((minute / 60) * 30) + ((second / 3600) * 30) + 90; 
    hourHand.style.transform = `translateY(-50%) rotate(${hoursDegrees}deg)`;

    if (hoursDegrees === 90) {
        hourHand.style.transition = "none"
    } else {
        hourHand.style.transition = "all 0.05s"
    }
}

setInterval(setTime, ONE_SECOND);


// to set the time right away without waiting for the setInterval kicks in
setTime();

