const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
 command: 'add',
 describe: 'Add a new note',
 builder: {
  title: {
   describe: 'Note title',
   demandOption: true,
   type: 'string'
  },
  body: {
   describe: 'Note body',
   demandOption: true,
   type: 'string'
  }
 },
 handler(argv) {
  getNotes.addnotes(argv.title, argv.body)
  console.log(argv.title,argv.body)
 }
})

// Create remove command
yargs.command({
 command: 'remove',
 describe: 'Remove a note',
 builder: {
  title: {
   describe: 'Note title',
   demandOption: true,
   type: 'string'
  },
  body: {
   describe: 'Note body',
   demandOption: true,
   type: 'string'
  }
 },
 handler(argv,chalk) {
  getNotes.removenotes(argv.title,argv.body,chalk)
 }
})

// Create list command
yargs.command({
 command: 'list',
 describe: 'List your notes',
 handler(argv) {
   getNotes.listNotes(argv.title)
  console.log('Listing out all notes')
 }
})

// Create read command
yargs.command({
 command: 'read',
 describe: 'Read a note',
 handler(argv) {
   getNotes.readNotes(argv.title,argv.body)
 }
})

yargs.parse();