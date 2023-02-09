const users = [
    {userId: 1, userName: 'Tom', attributes: ['nice','cute']},
    {userId: 2, userName: 'Dani', attributes: ['lovely']},
    {userId: 3, userName: 'Ari', attributes: ['nice','cool']},
]
const rta1 = users.map(user => user.attributes).flat();
// Hace completamente lo mismo
const rta2 = users.flatMap(user => user.attributes);
console.log('rta1', rta1);
console.log('rta2', rta2);