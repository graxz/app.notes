const notes = require('./notes');
const yargs = require('yargs');

//Customizar a versao 
yargs.version('1.0.1')

//Criando o comando de adicionar
yargs.command({
    command: 'add',
    describe: 'Adicionar uma nova nota.',
    builder: {
        title: {
            describe: 'Titulo da nota',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Descrição da nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    } 
}) 

//Criando o comando de remover
yargs.command({
    command: 'remove',
    describe: 'Remove uma nota.',
    builder: {
        title: {
            describe: 'Titulo da nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    } 
})

//Criando o comando de listar
yargs.command({
    command: 'list',
    describe: 'Listar notas.',
    handler() {
        notes.listNotes()
    }
})

//Criando o comando de ler nota
yargs.command({
    command: 'read',
    describe: 'Ler nota selecionada.',
    builder: {
        title: {
            describe: 'Titulo da nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    } 
})

yargs.parse()