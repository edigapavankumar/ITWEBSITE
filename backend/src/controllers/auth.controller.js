import User from "../models/users.model.js";
import httpStatus from 'http-status';
import jwt from "jsonwebtoken";

export const Login = async (req,res) =>{
    const {email, password} = req.body;
    // console.log(email, password)

    if(!email || !password){
        return res.status(httpStatus.BAD_REQUEST).json({message : "Please Enter All Fields"})
    }

    try{

        const user = await User.findOne({email});
        // console.log(user)
        
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message : "Invalid Credentials"})
        }

        // const isMatch = await bcrypt.compare(password,user.password);

        if(user){

            const token = jwt.sign(
                {id : user._id, email : user.email, role : user.role},
                process.env.JWT_SECRET || "default_secret",
                { expiresIn: "3h" }
            )

            res.cookie("token", token, {
                httpOnly: true,      
                secure: false, 
                sameSite: "Strict",
                maxAge: 2 * 60 * 60 * 1000, // Token expiry time in milliseconds (2 hours)
              });

              console.log(req.body)


            res.status(httpStatus.OK).json({
                message : "Login Successfully",
                token : token,
                user : {id: user._id, email: user.email}
            });

        }else{
            res.status(httpStatus.UNAUTHORIZED).json({message : 'Invalid Credentials'}); //401
        }

    }catch(e){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message : `Error occured : ${e.name}`})
    }
}
