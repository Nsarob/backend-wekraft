import express from 'express';
import ReplyController from '../controller/replyController.js';


const router = express.Router()

router.post("/:id",ReplyController.reply)


export default router