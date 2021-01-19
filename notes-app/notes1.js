const fs = require("fs")

const loadnotes = () => {
  try {
    buffer = fs.readFileSync('text.json')
    const jsondata = buffer.toString()
    const notesdata = JSON.parse(jsondata)
  } catch {
    return {
      notescontainer: []
    }
  }
}

let notes = loadnotes().notescontainer

addnotes = (title, body) => {
  if (notes.length === 0) {
    note = notes.push({
      'title': title,
      'body': body
    })
    console.log(notes)
  } else {
    const duplicate=notes.find((note)=>note.title===title)
    if (!duplicate){
      
    }else{
      
    }
    
    console.log('added')
    // savenotes()
  }
}
const savenotes = (notes) => {

}

module.exports = {
  addnotes: addnotes
};