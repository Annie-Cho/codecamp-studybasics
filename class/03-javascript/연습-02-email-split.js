let email = "codecamp@gmail.com"
// undefined
email.includes("@")
// true
let userId = email.split('@')[0]
// undefined
userId
// 'codecamp'
let company = email.split('@')[1]
// undefined
company
// 'gmail.com'
let result = []
// undefined
result.push(userId[0])
// 1
result.push(userId[1])
// 2
result.push(userId[2])
// 3
result.push(userId[3])
// 4
result
// (4) ['c', 'o', 'd', 'e']
result.push('*')
// 5
result.push('*')
// 6
result.push('*')
// 7
result.push('*')
// 8
result
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
result.join("")
// 'code****'
result
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
result.join("") + "@" + company
// 'code****@gmail.com'
let maskingMail = result.join("") + "@" + company
// undefined
maskingMail
// 'code****@gmail.com'