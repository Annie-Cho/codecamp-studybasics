let count = 0

const makeRandomNum = () => {
    let num = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("randomNum").innerText = num
    document.getElementById("randomNum").style.color = "#" + num

    /*
    if(count % 10 == 0) {
        document.getElementById("randomNum").style.color = "green"
    } else if(count % 2 == 0) {
        document.getElementById("randomNum").style.color = "red"
    } else {
        document.getElementById("randomNum").style.color = "blue"
    }
    count ++;
    */
}