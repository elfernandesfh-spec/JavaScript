//Valores falsos
console.log(!!0)// falso
console.log(!!"")// falso
console.log(!!null)// falso
//Valores verdadeiros
console.log(!!1)// verdadeiro
console.log(!!"texto")// verdadeiro
console.log(!![])// verdadeiro(arrays vazios são objetos, logo são verdadeiros)
console.log(!!{})// verdadeiro(objetos vazios são verdadeiros)