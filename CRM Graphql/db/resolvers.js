
//* Resolvers
/*
     _ es un obj (en este caso con _ lo ignoramos) que contiene los resultados asignados por el 
     resolver padre y permite las consultas anidadas.
     ctx es context y se pasan auth por ahi
     info tiene la info del query que se esta ejecutando
*/
const resolvers = {
    Query: {
        obtenerCurso: () => "Algo"
    }
}

module.exports = resolvers;

