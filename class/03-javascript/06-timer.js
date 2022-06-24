let isStarted = false

const makeRandomNum = () => {

    if(isStarted === false) {

        isStarted = true
        document.getElementById("successBtn").disabled = false
        
        let num = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("randomNum").innerText = num
        document.getElementById("randomNum").style.color = "#" + num

        let time = 5
        let timer

        timer = setInterval(function() {
            console.log("작동중")
            if(time >= 0) {
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2, "0");

                document.getElementById("time").innerText = min + ":" + sec
                    
                time --
            } else {
                document.getElementById("successBtn").disabled = true
                isStarted = false
                clearInterval(timer)
            }
        }, 1000)
    } else {
        console.error("타이머가 이미 작동중입니다")
    } 
}