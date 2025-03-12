import express from 'express';
import { postForm } from '../controllers/formController.js';

const formRouter = express.Router();

formRouter.post('/add-form', postForm);

export default formRouter;
