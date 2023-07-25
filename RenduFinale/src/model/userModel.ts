import { Model, Schema, model } from "mongoose";
import { IUser } from "./user.types";


const userSchema: Schema = new Schema<IUser>({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

 export const User: Model<IUser> = model<IUser>('users', userSchema);