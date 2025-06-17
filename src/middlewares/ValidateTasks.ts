import { Request, Response,NextFunction } from "express";

export const validateTasks = async (req:Request,res:Response,  next: NextFunction) => {
    const {title,description,Iscompleted} = req.body;
    if (!title) {
        res.status(400).json ({ message : "Title is required"});
        return
    }
    if(!description) {
     res.status(400).json ({ message : "Description is required"});
        return
    }
    if (!Iscompleted) {
        res.status (400).json ({ message : "Iscompleted is required"});
        return
    }

next();
};