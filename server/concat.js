const element1 = [1,1,2,2]
const element2 = [3,3,4,4]

const rta1 = element1.concat(element2) // retorna un nuevo elemento
const rta2 = element1.push(element2) // va a meter el array completo en una misma celda
const rta3 = element1.push(...element2) // si quiere 'pegarlos

console.log(rta1);
console.log(rta2);
console.log(rta3);