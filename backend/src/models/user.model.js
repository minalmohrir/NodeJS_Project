import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, // remove whitespace from both ends of the string
            minLength: 1,
            maxLength: 30,
            

        },

        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 50

        },

        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        }    

    },
    {
        timestamps: true, // automatically add createdAt and updatedAt fields
    }

)

//before saving any password we need to hash it for security reasons
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10); // hash the password with a salt round of 10
    
    next();
});

//compare passwords
userSchema.methods.comparePassword = async function (Password) {
    return await bcrypt.compare(Password, this.password)
}

export const User = mongoose.model("User", userSchema);