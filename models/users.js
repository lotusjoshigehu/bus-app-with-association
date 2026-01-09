const {Sequelize,DataTypes}=require("sequelize")

const busequelize=require("../connection/busconnection")

const Users=busequelize.define("Users",{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    name:
    {
       type:DataTypes.STRING,
       allowNull:false
    },
    email:
    {
      type:DataTypes.STRING,
      allowNull:false
    }
})

module.exports={Users}