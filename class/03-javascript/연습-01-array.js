let pairFriends = ["조형래", "인영교", "김주은"]
// undefined
pairFriends
// (3) ['조형래', '인영교', '김주은']
pairFriends[1]
// '인영교'
pairFriends.includes('조형래')
// true
pairFriends.includes('조혜인')
// false
pairFriends.push("맹구")
// 4
pairFriends
// (4) ['조형래', '인영교', '김주은', '맹구']
pairFriends.includes('맹구')
// true
pairFriends.pop()
// '맹구'
pairFriends
// (3) ['조형래', '인영교', '김주은']
pairFriends.length
// 3

var developer = ["끈기", "인내", "꼼꼼함", "성실함", "긍적적인 마인드"]
// undefined
developer[4]
// '긍적적인 마인드'
developer.pop()
// '긍적적인 마인드'
developer.push("긍정적인 마인드")
// 5
developer
// (5) ['끈기', '인내', '꼼꼼함', '성실함', '긍정적인 마인드']
developer[4]
// '긍정적인 마인드'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer.concat(dream)
// (8) ['끈기', '인내', '꼼꼼함', '성실함', '긍정적인 마인드', '커리어점프', '성공', '할수있다']
developer
// (5) ['끈기', '인내', '꼼꼼함', '성실함', '긍정적인 마인드']
dream
// (3) ['커리어점프', '성공', '할수있다']
developer.concat(dream)
// (8) ['끈기', '인내', '꼼꼼함', '성실함', '긍정적인 마인드', '커리어점프', '성공', '할수있다']
var testArray = developer.concat(dream)
// undefined
testArray
// (8) ['끈기', '인내', '꼼꼼함', '성실함', '긍정적인 마인드', '커리어점프', '성공', '할수있다']