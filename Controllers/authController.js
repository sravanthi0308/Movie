import User from '../Models/User.js';
// import bcrypt from 'bcrypt.js';
import jwt from 'jsonwebtoken';

export const registerUser = async(req,res) => {
    try{
        console.log('registering the user',req.body)
        const { firstName, lastName, email, loginId, password, contactNumber } = req.body;
    

        const user = new User({ firstName, lastName, email, loginId, password, contactNumber });

        await user.save();
        res.json({ message: 'User registered successfully',firstName,lastName });
    
    } catch(err){
        console.error(err);
        res.status(500).send('Server error - register');
    }
}

export const loginUser = async(req,res) => {
    try{
        console.log('login user',req.body)
        const { email,  password} = req.body;
    
        let user = await User.findOne({email});
        if(!user) return res.status(400).json({ message: 'Invalid Credentials' });

        const payload = { user: { id:user.id } };
        console.log('Payload',payload)
        console.log('JWT secret',process.env.JWT_SECRET)
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        });
    
    } catch(err){
        console.error(err);
        res.status(500).send('Server error');
    }
}
