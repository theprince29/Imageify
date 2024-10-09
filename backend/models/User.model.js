import { Schema, model } from 'mongoose';

const UsersSchema = Schema(
    {
        username: {
            type: String,
            required: [true, "User name required"],
        },
        email: {
            type: String,
            
            required: true,
        },
        password: {
            type: String,
            required: false,
        },
        verification_token: {
            type: String,
            default: null,
        },
        status: {
            type: Boolean,
            default: 0,
        },
        googleId: {
            type: String,
            required: false,
        },
        password_reset_token :{
            type:String,
            default:null
        },
        password_reset_token_expires:{
            type:Date,
            default: null,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true, 
    }
);

const User = model("User", UsersSchema);

export default User;