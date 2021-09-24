
//* Resolvers
/*
     _ es un obj (en este caso con _ lo ignoramos) que contiene los resultados asignados por el 
     resolver padre y permite las consultas anidadas.
     ctx es context y se pasan auth por ahi
     info tiene la info del query que se esta ejecutando
*/
const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');


const resolvers = {
    Query: {
        obtenerCurso: () => "Get of something"
    },
    Mutation: {
        nuevoUsuario: async( _, {input} ) => {
            
            const { email, password } = input;

            // Revisar si el usuario ya esta registrado
            const existeUsuario = await Usuario.findOne({email});
            if( existeUsuario ) {
                throw new Error('El usuario ya esta registrado');
            }

            // hashear el password
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);


            try {

                // Guardar el usuario en la base de datos
                const usuario = new Usuario(input);
                usuario.save();
                return usuario;

            } catch (error) {
                console.log(error)
            }

        }
    }
}

module.exports = resolvers;

