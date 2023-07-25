import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';


export const validation = [
    check('email')
    .exists()
    .withMessage('email required !')
    .isEmail()
    .withMessage('Email not valid !'),
    check('password')
    .exists()
    .withMessage('password is required')
];

export function handleErrorValidation(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        for(let err of errors.array()) {
            console.error(err.msg);
        }
        return res.status(422).json({errors: errors.array});
    }
    next();
}