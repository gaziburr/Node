const fs = require('fs')
const chalk = require('chalk')

const addnotes = (title, body) => {
  let notes = loadnotes()

  //const duplicatenotes = notes.filter((note) =>note.title === title)
  const duplicatenote = notes.find((note) => note.title === title)
  if (!duplicatenote) {
    notes.push({
      title: title,
      body: body
    })
    savenotes(notes)
    console.log(chalk.green.inverse("🤗🤗Successfully added thank you,(granted)"))
  } else {
    console.log(chalk.red.inverse('title taken bro !'))
  }

}


savenotes = (notes) => {
  notesdata = JSON.stringify(notes)
  fs.writeFileSync('notes.json', notesdata)
}

loadnotes = () => {
  try {
    const databuffer = fs.readFileSync('notes.json')
    const datajson = databuffer.toString()
    return JSON.parse(datajson)
  } catch {
    return []
  }
}

listNotes = (title) => {
  notes = loadnotes()
  notes.filter((note) => {
    console.log(note.title)
  })

}


readNotes = (title) => {
  notes = loadnotes()
  match = notes.find((note) => note.title === title)

  if (match) {
    console.log(match);
    console.log(`${chalk.blue.inverse(match.title)}   ====>>>      ${chalk.yellow.inverse(match.body)}`)
  }
  else if (!match) {
    console.log(`${chalk.red.inverse("Note not found")}`)
  }

}






const removenotes = (title, body) => {

  note = loadnotes()

  const keepnotes = note.filter((note) => {
    return note.title !== title
  })

  if (note.length > keepnotes.length) {
    console.log(chalk.green.inverse("🤗🤗Successfully removed thank you,(granted)"))
  } else if (note.length <= keepnotes.length) {
    console.log(chalk.red.inverse('No note found, access denied!'))

  } else if (note.title !== title) {

  }
  savenotes(keepnotes)
}

module.exports = {
  addnotes: addnotes,
  removenotes: removenotes,
  listNotes: listNotes,
  readNotes: readNotes
};