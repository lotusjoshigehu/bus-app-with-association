const {Sequelize}=require("sequelize")

const busequelize= new Sequelize("testdb","root","lotus",{
    host:"localhost",
    dialect:"mysql"
});

(async ()=>{try {
     await busequelize.authenticate()  
     console.log("authenticate sucessfully") 
} 
catch (error) {
    console.log(error)
}})()

module.exports=busequelize