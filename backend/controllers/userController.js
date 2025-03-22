import User from '../models/user.js';  // Change require to import
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// Register user
export const signup = async (req, res) => {
    try {
        const { 
            name,  
            email, 
            password,
            confirmPassword,
        } = req.body;
        
        // Validate input
        if(!name || !email || !password || !confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Please fill all the required fields",
            });
        }
        // Password matching
        if(password !== confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Password and confirm password do not match",
            });
        }
        
        // Check existing User
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }
        
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("From Register controller");
        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        console.log("From Register controller2");
        // Delete OTP record after successful verification
        console.log("From Register controller3");
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: "User registration failed",
            error: error.message
        });
    }
};
export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });  // Fix variable name
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
