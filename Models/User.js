import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const userSchema = new Schema({
    firstName: { type: String, required:true },
    lastName: { type: String, required:true },
    email: { type:String, required: true},
    loginId: { type: String, required:true },
    password: { type: String, required:true },
    contactNumber: { type: String, required:true },
});


// export default model('User',userSchema);
const User = mongoose.model('User',userSchema);
export default User;