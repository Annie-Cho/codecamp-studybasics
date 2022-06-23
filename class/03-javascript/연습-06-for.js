const children = ["철수", "영희", "훈의"]

for(let i=0; i<children.length; i++) {
    console.log(children[i] + "입니다")
}

debugger;       /* 구글에 있는 디버거 사용할 수 있음 */
for(let k=0; k<children.length; k++) {
    console.log(children[k] + "입니다")
}

let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
  ]

  for(let i=0; i<persons.length; i++) {
    if(persons[i].age >= 20) {
        console.log(persons[i].name + "은/는 성인입니다")
    } else if(persons[i].age >= 0) {
        console.log(persons[i].name + "은/는 미성년자입니다")
    } else {
        console.log(persons[i].age + "는 잘못된 값입니다")
    }
}

for(let i=0; i<persons.length; i++) {
    if(persons[i].age >= 20) {
        console.log(persons[i].name + "은/는 성인입니다")
        console.log(`제가 봤을 때는 ${persons[i].name} 님은 ${persons[i].age} 세로 성인입니다`)
    } else if(persons[i].age >= 0) {
        console.log(persons[i].name + "은/는 미성년자입니다")
    } else {
        console.log(persons[i].age + "는 잘못된 값입니다")
    }
}