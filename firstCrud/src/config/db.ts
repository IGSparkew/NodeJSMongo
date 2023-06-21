import mongoose, {connect} from "mongoose";

export const connectionToDb = async () => {
    await connect(`mongodb+srv://${process.env.mongo_user}:${process.env.mongo_passwd}@${process.env.mongo_uri}`);
    if (mongoose.connection.readyState != 1) {
        console.log('Error on connection database!');
        process.exit(1);
    }
}