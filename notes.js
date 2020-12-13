const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("Nova nota adicionada!"))
    } else {
        console.log(chalk.bgRed("Esse titulo já existe!"))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesRemove = notes.filter((note) => note.title !== title)
    
    if(notesRemove.length < notes.length){
        saveNotes(notesRemove)
        console.log(chalk.bgGreen("Nota removida!"))
    } else {
        console.log(chalk.bgRed("Essa nota não existe!"))
    }

}

const listNotes = () => {
    console.log(chalk.inverse('Your notes...'))

    const notes = loadNotes()
    notes.forEach(note => console.log(note.title));
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.bgBlackBright('Título da nota --> ' + note.title))
        console.log(chalk.bgBlackBright('Corpo da nota --> ' + note.body))
    } else {
        console.log(chalk.bgRed('Nota não encontrada'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}