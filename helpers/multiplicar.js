
const fs = require('fs');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    let salida = '';
    try {
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar){
            console.log(salida);
        }

        let nombreArchivo = `tabla-${base}.txt`; 
        fs.writeFileSync( `./tablas/${nombreArchivo}`, salida);
        return nombreArchivo;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}