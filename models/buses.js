const {Sequelize,DataTypes}=require("sequelize")

const busequelize=require("../connection/busconnection")


const Buses=busequelize.define("Buses",{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    busNumber:
    {
       type:DataTypes.STRING,
       allowNull:false
    },
    totalSeats:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    },
    availableSeats:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    }  
})



module.exports=
{
    Buses
}