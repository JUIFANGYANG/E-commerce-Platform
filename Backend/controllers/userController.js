import validator from "validator";
import userModel from "../models/userModel.js"; // 記得加 .js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// 產生 Token 的輔助函式
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// 使用者註冊邏輯
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. 檢查使用者是否已存在
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // 2. 驗證 Email 格式
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // 3. 驗證密碼強度
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // 4. 加密密碼 (Hashing)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 5. 建立新使用者實例並存入資料庫
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        // 6. 產生 JWT 通行證並回傳給前端
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const loginUser = async (req, res) => {
    // 接下來要寫的登入邏輯
    try {
        // 1. 從 req.body 拿 email, password
        const {email, password} = req.body;
        // 2. 從資料庫找user
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json ({success:false, message: "User doesn't exist"})

        }

        // 3. 比對密碼是否正確
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch){

            //4.發行新通行證
            const token = createToken(user._id)
            res.json({success:true, token})
        } 
        else {
            res.json ({success:false, message:'Invaild credentials'})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
};

const adminLogin = async (req, res) => {

    try {

        const {email, password} = req.body

        //從環境變數讀取正確的帳密進行比對
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            //Generate Token if it's correct
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: "Invaild credentials"})
        }
        
    } catch (error) {

        console.log(error)
            res.json({ success: false, message: error.message})

    }
};

export { loginUser, registerUser, adminLogin };