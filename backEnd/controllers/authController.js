const validator = require('validator');
const bcrypt = require('bcrypt');
const user = require('../models/peopleModel');

// Async register function
const register = async (req, res) => {
    try {
        const email = req.body.email?.trim();
        const password = req.body.password;
        const name = req.body.name?.trim();
        const status = req.body.status;
        const phone = req.body.phone;

        // Check valid fields
        if (!email || !password) {
            return res.status(400).json({error: "All fields are required"})
        }
        // Check valid email
        if (!validator.isEmail(email)) {
            return res.status(400).json({error: "Email invalid"});
        }
        // Check valid password
        if (password.length < 5) {
            return res.status(400).json({error: "Password must contains at least 5 characters"});
        }
        // Check email already exist
        const existingEmail = await user.findByEmail(email);
        if (existingEmail) {
            return res.status(400).json({error: "Email already exist"});
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await user.createUser({
            email: email,
            password_hash: hashedPassword,
            name: name,
            status: status,
            phone: phone
        });

        // Create session
        req.session.userId = newUser.id;

        // Return response without password
        return res.status(201).json({
            message: "Create user with success",
            user : {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
                status : newUser.status,
                phone : newUser.phone
            },
            redirect: '/login.html'
        });
    } catch (error) {
        console.error("Error in register", error);
        return res.status(500).json({error: "Error server"});
    }
};

const login = async (req, res) => {
    try {
        const email = req.body.email?.trim();
        const password = req.body.password;
        
        if (!email || !password) {
            return res.status(400).json({error: 'Email and password are requireed'});
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({error: "Email invalid"});
        }
        const existingUser = await user.findByEmail(email);
            if (!existingUser) {
                return res.status(400).json({error: "Email is invalid"});
            }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password_hash);
        if (!isPasswordValid) {
            return res.status(400).json({error: "Password is invalid"});
        }

        req.session.userId = existingUser.id;

        return res.status(200).json({
            message: "Login successful",
            user: {
                id: existingUser.id,
                email: existingUser.email,
                name: existingUser.name,
                status: existingUser.status,
                phone: existingUser.phone
            },
            redirect: '../frontEnd/html/candidate.html'
        });
    } catch (error) {
        console.error("Error in login:", error);
        return res.status(500).json({error: "Server error"});
    }
}

module.exports = { register, login };