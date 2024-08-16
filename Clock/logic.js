let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let meridiem = document.querySelector("#meridiem");
let display_date = document.querySelector("#date");
let display_date2 = document.querySelector("#date2");


setInterval(() => {
    // Time
    const date = new Date()
    if (date.getHours() > 12) {
        hour.innerHTML = (date.getHours() - 12) < 10 ? `0${date.getHours() - 12}` : date.getHours() - 12
    }
    else {
        hour.innerHTML = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours()
    }
    minute.innerHTML = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    second.innerHTML = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    meridiem.innerHTML = date.getHours() > 11 ? "PM" : "AM"


    // Date
    function getsuffix() {
        if (date.getDate() == 1 || date.getDate() == 21 == date.getDate() == 31) {
            return "st"
        }
        else if (date.getDate() == 2 || date.getDate() == 22) {
            return "nd"
        }
        else if (date.getDate() == 3 || date.getDate() == 23) {
            return "rd"
        }
        else {
            return "th"
        }
    }
    let weekday = date.toLocaleString("default", {weekday: "short"})
    let month = date.toLocaleString("default", {month: "long"})
    let weekday2 = date.toLocaleString("hi-IN", {weekday: "short"})
    let month2 = date.toLocaleString("hi-IN", {month: "long"})
    display_date.innerHTML = `${weekday}, ${month} ${date.getDate()}${getsuffix()} ${date.getFullYear()}`
    display_date2.innerHTML = `(${weekday2}, ${month2} ${date.getDate()}, ${date.getFullYear()})`
}, 1000)

