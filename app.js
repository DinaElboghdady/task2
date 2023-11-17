
const fs = require ("fs")

const data1  = require ('./data1')

const yargs = require ("yargs")
/////////////////////////////////////////////////////////
yargs.command({
    
    command : "add",
    decribe : "to add an item",
    builder :{
        id :{
            describe : "this is the id in add command",
            demandoption : true,
            type : "string",
        },
        fname : {
            describe : "this is the first name in add command",
            demandoption : true,
            type : "string",},
        lname : {
            describe: "this is the last name in add command",
            demandoption: true,
            type: "string",}, 
        age :{
           describe: "this is the age in add command",
          demandoption: true,
            type : "string",},
        city :{
           describe: "this is the city in add command",
          demandoption: true,
            type : "string",}
    },
    
    handler :(x)=> {
        data1.addPerson(x.id , x.fname , x.lname , x.age , x.city)}
    })
////////////////////////////////////////////////////////////////
    yargs.command({
        command:"delete",
        describe: "to delete an item",
        handler:(x)=> {
            data1.deletePerson(x.id)
        }
    })
    ////////////////////////////////////////////////////////////
    yargs.command({
       command : "read",
        describe :"to read data",
        builder: {
           id :{
               describe : "this is id desc in read command",
                demandoption : true,
                typeof: "string"
            }
                
            },
           handler:(x)=>{
             data1.readData(x.id)
        }
    })
////////////////////////////////////
 yargs.command({
    command: "list",
    describe: "to list data",
    handler:()=> {
        data1.listData() }
 })

 
     yargs.parse()
