import { DataTypes } from "sequelize";
import sequelize from "../connection.js";

const customersModel=sequelize.define('customers',{
    name:{
        type:DataTypes.STRING(150),
        allowNull:false
    },email:{
        type:DataTypes.STRING(150),
        allowNull:false
    },password:{
        type:DataTypes.STRING(150),
        allowNull:false
    }
})
export default customersModel