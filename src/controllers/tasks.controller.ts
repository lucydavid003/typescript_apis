import { Request,Response } from "express";
import { PrismaClient, task } from "@prisma/client";
const prisma = new PrismaClient();








export const getAllTasks = async (_req:Request, res:Response) => {
  try {
     const tasksAll = await prisma.task.findMany();
    res.status(200).json(tasksAll);
  } catch (error) {
    res.status(500).json("error fetching tasks");
  }
}


export const findbyId = async (req:Request,res:Response) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.findFirst({
      where: { id: id },
    });
    if (task) {
      res.status(200).json(task);
      return
    } else {
       res.status(404).json({ message: "unable to find task" });
       return
    }
  } catch (e) {
    console.log("Error fetching task:", e);
    res.status(500).json({ message: " Server Error" });
  }
}

export const createTask = async (req:Request, res:Response) => {
  
try {
  const{title, description, Iscompleted}:task = req.body;
  const task = await prisma.task.create ({
    data:{
      title:title,
      description: description,
      Iscompleted: Iscompleted
    }
  })
  res.status(200).json(task);

} catch (error) {
  console.log("Error creating task")
  res.status(500).json({ message: " Server Error" });
}
}

export const updateTask = async (req:Request,res:Response) => {
  try {
    const {id}= req.params
    const {title,description,Iscompleted}:task =req.body;
    const task = await prisma.task.update ({
      where: {id:id},
      data: {
        title: title,
        description: description,
        Iscompleted: Iscompleted
      }
    })
    res.status(200).json (task);
  
  } catch (error){
    console.log("Error updating task")
    res.status(500).json ({ message: "Server Error" })
  }
}
















export const deleteTask = async (req:Request, res:Response) => {
  try {
    const {id }= req.params 
    const deletedTask = await prisma.task.update ({
      where : {id },
         data: {Isdeleted :true}
    })
    res.status(200).json(deletedTask);
  } catch (error) {
    console.log("Error deleting  task")
  res.status(500).json({ message: " Server Error" });
  }
}