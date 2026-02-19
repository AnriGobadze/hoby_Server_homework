import express from "express";
import mongoose from "mongoose";
import Hobby from "../models/Hobby.js"



const hobbyRouter = express.Router();


hobbyRouter.post("/", async (req, res) => {
    try {
        const {name, description, category, frequency, isActive} = req.body
        if(!name){
            return res.status(400).json({message:"name is required"})
        };

        const createdHobby = Hobby.create({
            name,
            description,
            category,
            frequency,
            isActive
        })

        res.status(201).json("created succesfuly", createdHobby)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



hobbyRouter.get("/", async (req, res) => {
    try {
        const allHobies = await Hobby.find();
        res.status(400).json(allHobies)
    } catch (error) {
        res.status(500).json({message: error.message})       
    }
})

hobbyRouter.get("/:id", async (req,res) => {
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json("Invalid ID")
        }

        const hobbyByID = await Hobby.findById(id);
        if(!hobbyByID){
        return res.status(404).json("hobby not found")

        }
        res.status(500).json(hobbyByID)

    } catch (error) {
        res.status(500).json({message: error.message})        
    }
})



hobbyRouter.delete("/:id", async (req,res) => {
    try {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json("Invalid ID")  
        }

        const hobbyToDelete = await Hobby.findByIdAndDelete(id);
        if(!hobbyToDelete){
          return res.status(404).json("hobby not found")
        }


        
    } catch (error) {
        res.status(500).json({message: error.message})        

    }
})
