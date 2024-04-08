import express from "express";

const router = express.Router();

router.get("/:id", (req,res)=>{
    const speakerId = req.params.id;
    const 
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