const {Buses,Users,Booking } = require("../models")


const {Op}=require("sequelize")
const adduserentries= async (req,res)=>
{
    try {
        const {id,name,email}=req.body
        const users=await Users.create({
            id:id,
            name:name,
            email:email
        })
        res.status(201).send("data inserted sucessfully")
        
    } catch (error) {
        console.log(error)
        
    }
}

const addbusesentries= async (req,res)=>
{
    try {
    const {id,busNumber,totalSeats,availableSeats}=req.body
    const buses= await Buses.create({
        id:id,
        busNumber:busNumber,
        totalSeats:totalSeats,
        availableSeats:availableSeats
    })
    res.status(201).send("buses data inserted sucesssfuly")
    } catch (error) {
        console.log(error)
    }
    
}

const postbooking= async (req,res)=>
{
    try {
    const {busid,userid,seatNumber}=req.body
    const booking=await Booking.create(
        {
            busid:busid,
            userid:userid,
            seatNumber:seatNumber
        })
    res.status(201).send("booking inserted sucessfully")    
}      
     catch (error) {
        res.status(500).json({"error":error.message})
        
    }
}

const getbusbooking =async(req,res)=>
{
    try {
   const urlbusid=req.params.id
   const userbooking= await Booking.findAll(
    {
        where:{busid:urlbusid},
        attributes:["busid","seatNumber"],
        include:
        [
            {
                model:Buses,
                attributes:["busNumber"]
            }
        ]
    })
    res.status(200).json(userbooking)
        
    } catch (error) {

        res.status(500).json({"error":error.message})
    }
   
}

const getuserbooking= async (req,res)=>
{
     const urluserid=req.params.id
     try {
        const userbooking=await Booking.findAll(
        {
           where:{userid:urluserid},
           attributes:["userid","seatNumber"],
           include:[
            {
                model:Users,
                attributes:["name","email"]
            }
           ]
        })
        res.status(200).json(userbooking)     
     } catch (error) {
        res.status(500).json({"error":error.message})
     }

}

module.exports=
{
    adduserentries,
    addbusesentries,
    postbooking,
    getbusbooking,
    getuserbooking

}