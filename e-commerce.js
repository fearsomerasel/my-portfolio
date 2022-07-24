// countdown
let dayItem = document.querySelector("#days")
let dayHours = document.querySelector("#hours")
let dayMin = document.querySelector("#min")
let daySec = document.querySelector("#sec")

let countDown = () => {
    let futureDate = new Date("30 September 2022");
    let CurrentDate = new Date();
    let myDate =futureDate - CurrentDate;

    let days = Math.floor(myDate/1000/60/60/24);
    let hours = Math.floor(myDate/1000/60/60)%24;
    let min = Math.floor(myDate/1000/60)%60;
    let sec = Math.floor(myDate/1000)%60;


    dayItem.innerHTML = days;
    dayHours.innerHTML = hours;
    dayMin.innerHTML = min;
    daySec.innerHTML = sec;
}
countDown()

setInterval (countDown,1000)