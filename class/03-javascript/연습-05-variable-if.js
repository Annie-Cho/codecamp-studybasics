1+1
// 2
1+"1"
// '11'
10 + 9
// 19
10 + '9'
// '109'
typeof(1)
// 'number'
typeof('1')
// 'string'
typeof(true)
// 'boolean'
typeof({})
// 'object'
typeof([])
// 'object'
Array.isArray([])
// true
Array.isArray({})
// false
'A' === 'A'
// true
'B' === 'C'
// false
'1' === 1
// false
'1' == 1
// true
true && false
// false
true && true
// true
true && !false
// true
true || false
// true
false || false
// false


if('A' === 'A') {
    console.log("정답")
}
else {
    console.log("땡")
}

if(false) {
    console.log("정답")
}
else {
    console.log("땡")
}

if(0) {
    console.log("정답")
}
else {
    console.log("땡")
}


const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}

if(profile.age >= 20) {
    console.log("성인입니다")
} else if(profile.age >= 8 && profile.age <= 19) {
    console.log("학생입니다")
} else {
    console.log("어린이입니다")
}

function CheckAge3(age) {
    if(age <= 0) {
        console.log("잘못된 값입니다.")
    }
    else if(age >= 20) {
        console.log("성인입니다")
    } else if(age >= 8 && age <= 19) {
        console.log("학생입니다")
    } else {
        console.log("어린이입니다")
    }
}

/* and 어차피 나이니까 20 이상, 8이상, 0이상, 예외처리로 나눌 수도 있음 */

