const {Buses} = require("./buses")
const {Users} = require("./users")
const {Booking} = require("./booking")

//one to many realtionship
Buses.hasMany(Booking,{foreignKey:"busid"})
Booking.belongsTo(Buses,{foreignKey:"busid"})

//one to many relationship
Users.hasMany(Booking,{foreignKey:"userid"})
Booking.belongsTo(Users,{foreignKey:"userid"})

module.exports=
{
    Buses,
    Users,
    Booking
}