


const interval = () => {
    setInterval(() => {
        const getCurrentTime = () => {
            const timer = document.getElementById('timer')
            const dT = new Date();
            const hours = dT.getHours();
            const minutes = dT.getMinutes();
            const seconds = dT.getSeconds()
            timer.innerHTML = `${hours}:${minutes}:${seconds}`
        }
        getCurrentTime()
        
    }, 1000);
}
interval()




document.getElementById('date').innerHTML = new Date().getFullYear()