import { Request, Response, NextFunction } from "express";
import { userService } from "../config/configBean";

export class UserController {

    public async login(req:Request, res:Response) {
        try {
            const token = await userService.login(req.body);
            res.status(200).json({token: token});

        } catch(err) {
            res.status(500).json({errors: err});
        }
    }

    public async register(req:Request, res:Response) {
        try {
            const message = await userService.register(req.body);
            res.status(200).json({message: message});
        } catch (err) {
            res.status(500).json({errors: err});
        }
        
    }

}