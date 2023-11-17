const fs = require("fs")

const addPerson = (id , fname , lname , age , city)=>{
    const allData = loadData()
    
        allData.push({
            id : id,
            fname : fname,
            lname : lname,
            age : age ,
            city : city,
        })
        saveAllData(allData)
    }
    
const loadData = ()=> {
    try{
        const dataJson = fs.readFileSync('data1.json').toString()
        return JSON.parse(dataJson)
    }catch{
        return[]

    }
}
//////////////////////////
const saveAllData= (allData)=>{
    const saveAllDataJson = JSON.stringify (allData)
    fs.writeFileSync ('data1.json' , saveAllDataJson )
}
////////////////////////
const deletePerson = (id) => {
     const allData = loadData()
     const datatokeep = allData.filter ((obj)=>{
       return obj.id !== id 
    })
    saveAllData(datatokeep)
}
///////////////////////////
const readData = (id)=>{
    const allData = loadData()
    const itemNeeded = allData.find((obj)=>{
        return obj.id == id
    })
    console.log(itemNeeded)
    if(itemNeeded){
        console.log(itemNeeded.id)
    }else{
        console.log("id needed not found")
    }
}
//////////////////////////////
const listData = ()=>{
    const allData = loadData()
    allData.forEach((obj)=>{
        console.log(obj.fname , obj.lname , obj.city )
    })
    }

module.exports={
   addPerson,
   deletePerson,
   readData,
   listData
}
