const fs = require("fs")


addnotes = (title, body) => {
  let notesarr = loadnotes()
  if (notesarr.length === 0) {
    notesarr.push({'title': title,'body': body},)
    let json = JSON.stringify(notesarr)
    savenotes(json)
    console.log('new note added')
  } else if (notesarr.length !== 0) {
    const duplicates = notesarr.find((note) => note.title === title)
    if (!duplicates) {
      notesarr.push({'title': title,'body': body})
      const json = JSON.stringify(notesarr)
      console.log(json)
      savenotes(json)
      console.log('new note added')
    } else if (duplicates) {
      console.log("title taken")
    }
  }
}


const removenotes=(title)=>{
 const notes=loadnotes()
 const restItem= notes.filter((note)=>note.title!==title)

 if(restItem.length<notes.length){
const stringify=JSON.stringify(restItem)
savenotes(stringify)
console.log('Note Removed')
}else{
  console.log('Note Not found')
}
}
const loadnotes = () => {
  try {
    const buffer = fs.readFileSync('./text.json')
    const json = buffer.toString()
    let notesarr = JSON.parse(json)
    return notesarr
  } catch {
    return []
  }
}

const savenotes = (notes) => {
 // let json = JSON.stringify(notes)
  //console.log(notesarr)
  fs.writeFileSync("./text.json", notes)
}

module.exports = {
  addnotes: addnotes,
  removenotes:removenotes
};