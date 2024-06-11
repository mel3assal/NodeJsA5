import bcrypt from "bcryptjs"
import customersModel from "../Database/model/customers.model.js";

const signUp=async(req,res,next)=>{
    const {email,password}=req.body;
    const customerExist=await customersModel.findOne({
        where:{email}
    })
    if(customerExist){
        return res.status(409).json({message:"already exist"})
    }
    req.body.password=bcrypt.hashSync(password,8)
    const newCustomer=await customersModel.create(req.body)
    return res.status(201).json({message:"done",newCustomer})
}


const logIn=async(req,res,next)=>{
    const {email,password}=req.body;
    const customer=await customersModel.findOne({
        where:{email}
    })
    if(customer){
        const match=bcrypt.compareSync(password,customer.password)
        if(match){
            return res.json({message:"login successfully"})
        }
        else{return res.json({message:"invalid password"})}
    }
    else{res.json({message:"invalid email"})}
}
export {
   signUp,logIn
}