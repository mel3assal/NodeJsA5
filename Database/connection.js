import { Sequelize } from "sequelize";
const sequelize = new Sequelize('test', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})
sequelize.authenticate().then(() => {
    console.log("DB connected");
}).catch(() => {
    console.log("Db fail");
})
export default sequelize;