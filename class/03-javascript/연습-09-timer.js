setTimeout(function() {
    console.log("3초가 지났습니다")   
}, 3000)
// 2
// VM289:2 3초가 지났습니다
setTimeout(function() {
    console.log("3초가 지났습니다")   
}, 3000)
// 3
// VM294:2 3초가 지났습니다
setInterval(function(){console.log("1초")}, 1000)
// 4
// 92VM505:1 1초

let time = 10
undefined
setInterval(function() {
    console.log(time)
    time --;
}, 1000)
// 2
// VM777:2 10
// VM777:2 9
// VM777:2 8
// VM777:2 7
// VM777:2 6
// VM777:2 5
// VM777:2 4
// VM777:2 3
// VM777:2 2
// VM777:2 1
// VM777:2 0
// VM777:2 -1
// VM777:2 -2
// VM777:2 -3

// let time = 10
undefined
setInterval(function(){
    if(time >= 0) {
        console.log(time)
        time --
    }
}, 1000)
// 2
// VM1114:3 10
// VM1114:3 9
// VM1114:3 8
// VM1114:3 7
// VM1114:3 6
// VM1114:3 5
// VM1114:3 4
// VM1114:3 3
// VM1114:3 2
// VM1114:3 1
// VM1114:3 0

// let time = 180
undefined
setInterval(function() {
    if(time >= 0) {
        const min = Math.floor(time / 60)
        const sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time --
    }
}, 1000)
// 2
// VM952:5 3:00
// VM952:5 2:59
// VM952:5 2:58
// VM952:5 2:57