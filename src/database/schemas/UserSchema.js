import { Schema, model, models } from "mongoose";

const UserSchema = Schema({

    nome: {type: String, required: true},
    numero: {type: String, required: true},
    
})


const User = models.User || model("User", UserSchema)

export default User

