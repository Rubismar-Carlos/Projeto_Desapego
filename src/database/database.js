import mongoose, { mongo } from "mongoose";

mongoose.set("strictQuery", true)

const dbname = "projeto_next"
const url = `mongodb+srv://root:root123456@cluster0.9hi3wnj.mongodb.net/${dbname}?retryWrites=true&w=majority`

const connect = async() => {

    return await mongoose.connect(url)

}

const disconnect = async() => {
    
    return await mongoose.disconnect()

}

const database = {
    connect,
    disconnect
}

export default database;