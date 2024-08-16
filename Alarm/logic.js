const user_date = document.querySelector("#date")
const user_time = document.querySelector("#time")
const setbtn = document.querySelector("#set")
const setagainbtn = document.querySelector("#set_again")
const msg = document.querySelector("#msg")
const user_tone = document.querySelector("#tone")
let x, y, create_date, current_date, alarm_date, u, sound

setInterval(() => {
    current_date = new Date()
    console.log(current_date)
}, 1000)

setbtn.onclick = () => {
    x = user_date.value
    y = user_time.value
    create_date = `${x}T${y}`
    alarm_date = new Date(create_date)
    localStorage.setItem("storage_date", create_date)

    if (alarm_date <= current_date) {
        user_date.value = ""
        user_time.value = ""
        msg.innerHTML = "Date/Time is Behind Current Date & Time"
    }
    else {
        const left_days = (alarm_date - current_date) / (3600 * 1000 * 24)
        const left_hours = (left_days - Math.floor(left_days)) * 24
        const left_minutes = (left_hours - Math.floor(left_hours)) * 60
        msg.innerHTML = ""
        window.alert(`Alarm set for ${Math.floor(left_days)} day, ${Math.floor(left_hours)} hour and ${Math.ceil(left_minutes)} minutes from now`)

        u = user_tone.value
        sound = new Audio(u);
        console.log(alarm_date)

        const display = setInterval(() => {
            if (Math.abs(alarm_date - current_date < 1000)) {
                sound.play()
                msg.innerHTML = "Times Up!!"
                clearInterval(display)
            }
            // if (alarm_date === current_date) {
            //     msg.innerHTML = "Time up"
            // }
        }, 1000)
    }
}

setagainbtn.onclick = () => {
    user_date.value = ""
    user_time.value = ""
    msg.innerHTML = ""
    // sound.clearInterval()
    sound.pause()
}


