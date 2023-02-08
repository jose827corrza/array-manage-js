const list = [1, 2, 12, 3, 4, 3, 8, 10, 9, 9, 1, 2, 1, 1];

// const newObj = list.reduce((obj, item) => {
//     if (!obj[item]){
//         obj[item] = 1;
//     } else {
//         obj[item] += 1;
//     }
//     return obj
// }, {})

// RETO
// 
const newObj = list.reduce((obj, value) => {
     if (value < 5) obj["1-4"] +=1;
     else if (value < 9) obj["5-8"] +=1;
     else obj["9-greater"] +=1;

     return obj
},{
    "1-4": 0,
    "5-8": 0,
    "9-greater": 0
})

console.log(newObj);