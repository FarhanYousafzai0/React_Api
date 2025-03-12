import asyncHandler from 'express-async-handler';
import Form from '../models/formmodel.js';

export const postForm = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Enter all the required values');
    }

    const newForm = await Form.create({
        name,
        email,
        password
    });

    res.status(201).json(newForm);
});
