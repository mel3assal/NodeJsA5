import customersModel from "./customers.model";
function relationships(){
    customersModel.hasMany(postModel,{
        onDelete:"CASCADE",
        onUpdate:"CASCAE"
    })
}