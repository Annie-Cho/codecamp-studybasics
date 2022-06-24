function hello() {
    alert("안녕하세요")         /* alert는 콘솔로그 */
}

hello()

function hello(name) {
    alert(name + "님 안녕하세요")
}

hello("조혜인")

function hello2(name) {
    return name + "님 안녕하세요"
}

hello2("조혜인")
// '조혜인님 안녕하세요'

const classmate = ["조형래", "인영교", "정훈", "여진"]
undefined
function greetingStudent(arr) {
    for(let i=0; i<arr.length; i++) {
        return arr[i] + "님 반갑습니다"
    }
}

greetingStudent(classmate)
'조형래님 반갑습니다'

function greetingStudent2(arr) {
    for(let i=0; i<arr.length; i++) {
        console.log(arr[i] + "님 반갑습니다")
    }
}

greetingStudent2(classmate)
// VM1736:3 조형래님 반갑습니다
// VM1736:3 인영교님 반갑습니다
// VM1736:3 정훈님 반갑습니다
// VM1736:3 여진님 반갑습니다

function checkLevel(num) {
    if(num >= 30) {
        return true
    } else {
        return false
    }
}

if(checkLevel(35) === true)
    console.log("입장 가능합니다")
else
    console.log("입장 불가능합니다")
// VM2402:2 입장 가능합니다


