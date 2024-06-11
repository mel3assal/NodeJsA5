import sequelize from './Database/connection.js';
import  customerRouter from './routes/customersRoute.js';
function bootstrap(app,express){
    sequelize.sync({alter:true});
    app.use(express.json())
    app.use('/customers',customerRouter);
    app.use('*',(req,res)=>{res.json({message:"Page Not Found"})})
}
export default bootstrap;