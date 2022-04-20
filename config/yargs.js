const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Numero de veces que se va a multiplicar la base'
    })
    .check( (argv, options) =>{
        if( isNaN( argv.b) ){
            throw 'La Base debe se un número.'
        }
        return true;
    } )
    .argv;

module.exports = argv;