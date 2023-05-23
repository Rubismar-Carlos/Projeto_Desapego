import { Schema, model, models } from "mongoose";

const UserSchema = Schema({

    nome: {type: String, required: true},
    numero: {type: String, required: true},
    email: {type: String, required: true},
    urlImg: {type: String, required: true},
    
})


const User = models.User || model("User", UserSchema)

export default User

