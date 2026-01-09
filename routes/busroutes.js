const express=require("express")
const buscontroller=require("../controllers/buscontollers")
const router=express.Router()


router.post("/users",buscontroller.adduserentries)
router.post("/buses",buscontroller.addbusesentries)
router.post("/booking",buscontroller.postbooking)
router.get("/users/:id/bookings",buscontroller.getuserbooking)
router.get("/buses/:id/bookings",buscontroller.getbusbooking)
module.exports=router