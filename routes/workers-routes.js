const express = require("express")
const Worker = require("../models/worker")
const router = express.Router()

router.get("/workers" , (req,res)=>{

    Worker.findAll().then((workers)=>{

        res.render("workers" , {workers})


    })

   
})

router.get("/workers/new" , async(req,res)=>{

    res.render("new")
})

router.post("/workers", async(req,res)=>{

    console.log(req.body);

    await Worker.create({first_name:req.body.fname , middle_name:req.body.mname , last_name:req.body.lname , idno:req.body.idno , contact:req.body.phone}).then(()=>res.redirect("/workers"))


})

router.get("/workers/:id" , async(req,res)=>{
    Worker.findByPk(req.params.id).then((oneworker)=>{

        res.render("show" , {oneworker})

    })
})

router.get("/workers/:id/edit" , async(req,res)=>{
    Worker.findByPk(req.params.id).then((worker)=>{
        res.render("edit" , {worker})

    })
    
})

router.put("/workers/:id" , (req,res)=>{

    const {fname , mname , lname , idno , phone} = req.body

    Worker.findByPk(req.params.id).then((worker)=>{
        worker.first_name = fname
        worker.middle_name = mname
        worker.last_name = lname
        worker.idno = idno
        worker.contact = phone
        worker.save().then(()=>res.redirect("/workers"))

    })
})

router.delete("/workers/:id" , (req,res)=>{
    Worker.findByPk(req.params.id).then(worker=>worker.destroy().then(()=>res.redirect("/workers")))
})

module.exports = router