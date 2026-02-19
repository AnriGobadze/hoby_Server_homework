import express from "express";
import Hobby from "../models/Hobby.js";

const hobbyRouter = express.Router()

hobbyRouter.post("/", async (req, res) => {
    try {
        const {name, description, category, frequency, isActive} = req.body
        if(!name){
            res.status(400).json({message:"name is required"})
        }

        const createHobby = await Hobby.create({
            name,
            description, 
            category, 
            frequency, 
            isActive
        })

        res.status(201).json({message:`Created succesfuly: ${createHobby}`});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})



