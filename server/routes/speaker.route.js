import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    console.log("router is working");
})

router.post("/", (req,res)=>{
    console.log("router is working");
})

router.put("/", (req,res)=>{
    console.log("router is working");
})

router.delete("/", (req,res)=>{
    console.log("router is working");
})


export default router;