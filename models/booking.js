const {Sequelize,DataTypes}=require("sequelize")

const busequelize=require("../connection/busconnection")

const Booking=busequelize.define("Booking",{
    busid:
    {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    userid:
    {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    seatNumber:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    },  
})

module.exports={Booking}