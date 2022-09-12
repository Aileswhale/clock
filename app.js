const showtime = ()=>{

    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

   let formater = timeformater(hours)
   hours = reducetime(hours)
   hours = addzero(hours)
   minutes = addzero(minutes)
   seconds = addzero(seconds)

const clock = document.querySelector('.clock')
clock.innerHTML= `${hours} : ${minutes} : ${ seconds} ${formater}`
 



}

const timeformater = (hours)=>{
 let format = 'AM'
 if (hours >= 12) {
    format = 'PM'
 }
 return format
}

const reducetime = (hours)=>{
 if (hours > 12) {
    hours = hours - 12
 }
 if (hours === 0) {
    hours = 12
 }
 return hours

}

const addzero = (time)=>{
    if (time < 10) {
        time = '0' + time
    }
    return time 
}


showtime()
setInterval(showtime, 1000)
