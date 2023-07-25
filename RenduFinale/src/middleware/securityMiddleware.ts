import {Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export function handleUserValidation(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY as string);
        
        if (decoded) {
            next();
        }

    } catch (err) {
        res.status(401).json({error: "Please authenticate"});
    }
    
}