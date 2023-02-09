const matriz = [
    [1,2,3],
    [4,5,6, [8,8,8,[9,9]]]
]
// Reemplaza lo que se tendria que hacer con un for anidado, e incluso es mejor porue no es tan robusto y se adapta a la profundidad,
// Se podria reemplazar con una funcion de recursividad
const newArray = matriz.flat() // Depth 1
const newArray2 = matriz.flat(5) // Depth 5
console.log(newArray);
console.log(newArray2);