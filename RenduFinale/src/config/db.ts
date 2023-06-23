import mongoose, {connect} from "mongoose";

export const connectionToDb = async () => {
    try {
        await connect(`mongodb+srv://${process.env.mongo_user}:${process.env.mongo_passwd}@${process.env.mongo_uri}`);
    } catch (error) {
        console.log("Error on connection mongo");
        process.exit(1);
    }
    
}