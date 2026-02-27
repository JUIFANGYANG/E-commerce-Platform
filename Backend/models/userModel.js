import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    // 第一部分：定義資料長相 (Definition)
    name:{ type: String, required: true},
    email: { type: String, required: true, unique: true}, 
    password: { type: String, required: true},
    cartData: { type: Object, default:{} }
    
},
// 第二部分：定義運作行為 (Options)
{ minimize: false })

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel