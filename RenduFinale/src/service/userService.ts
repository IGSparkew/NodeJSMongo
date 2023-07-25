import { connectionToDb } from "../config/db";
import { IUserInput } from "../dto/IUserInput";
import * as bcrypt from "bcrypt";
import { User } from "../model/userModel";
import { Error } from "mongoose";
import jwt from "jsonwebtoken";

export class UserService {
  public async login(userInput: IUserInput): Promise<string> {
    try {
        await connectionToDb();
      const query = await User.findOne({ email: userInput.email });
      if (!query) { 
        throw new Error("");
      }

      const isMatch = await bcrypt.compare(userInput.password, query.password);

      if (!isMatch) {
        throw new Error("")
      } 

      const token = jwt.sign({ _id: query.id.toString(), email: query.email }, process.env.JWT_KEY as string, {
        expiresIn: '2 days',
      });

      return token;
    } catch (err) {
        return "Email or password wrong";
    }

  }

  public async register(userInput: IUserInput): Promise<string> {
    try {
      await connectionToDb();
      const query = await User.find({ email: userInput.email });
      if (query.length > 0) {
        throw new Error("user already created!");
      }
      const encryptPasswd = await bcrypt.hash(
        userInput.password,
        Number(process.env.SALT_ROUND)
      );

      const userTocreate = new User({
        email: userInput.email,
        password: encryptPasswd,
      });

      await userTocreate.save();

      return "user was created !";
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        return err.message;
      }

      if (err instanceof Error) {
        return err.message;
      }
      return err as string;
    }
  }
}
