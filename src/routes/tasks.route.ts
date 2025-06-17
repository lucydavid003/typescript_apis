import {Router} from 'express';
import { createTask, deleteTask, findbyId, getAllTasks, updateTask } from '../controllers/tasks.controller';
const router = Router ()
import { validateTasks } from '../middlewares/Validatetasks';

router.get ("/", getAllTasks)
router.get ("/:id",findbyId)
router.post ("/",validateTasks, createTask)
router.put ("/:id", updateTask)
router.delete("/;id",deleteTask)
export default router;