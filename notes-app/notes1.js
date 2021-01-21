const fs = require("fs")
const loadnotes = () => {
  try {
    const buffer = fs.readFileSync('./text.json')
    const json = buffer.toString()
let notesarr=JSON.parse(json)
return notesarr
  } catch {
    return []
  }
}
addnotes = (title, body) => {
  let notesarr = loadnotes()

  if (notesarr.length === 0) {
    notesarr.push({'title': title,'body': body},)
    let json = JSON.stringify(notesarr)
    savenotes(json)
    console.log('new note added')
  } else if (notesarr.length !== 0) {
    console.log('it works ');
    const duplicates = notesarr.find((note) => note.title === title)
    if (!duplicates) {
      notesarr.push({'title': title,'body': body})
      const json = JSON.stringify(notesarr)

      savenotes(json)
      console.log('new note added')
    } else if (duplicates) {
      console.log("title taken")
    }
  }
}
const savenotes = (notes) => {
  let json = JSON.stringify(notes)
  //console.log(notesarr)
  fs.writeFileSync("./text.json", notes)
}
module.exports = {
  addnotes: addnotes,
};