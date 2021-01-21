const yargs=require("yargs")
const notefile=require("./notes1.js")

  argv=yargs.argv
  yargs.command({
    command: 'add',
    describe:'add note',
    builder:{
      title:{
        title:'add note',
        demandOption: true,
        type: String
      },
      body:{
       title: 'added note',
         demandOption: true,
         type: String
      }
    },
    handler(){
      notefile.addnotes(argv.title,argv.body)
    }
  })
  
  yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
      title: {
        title: 'remove',
        demandOption: true,
        type: String
      },
      body: {
        title: 'removed note',
        demandOption: true,
        type: String
      }
    },
    handler() {
      notefile.removenotes(argv.title)
    }
  })
  yargs.parse()