import express from 'express'
const app = express();
import bootstrap from './bootsrap.js'
app.use(express.json())
bootstrap(app,express)
app.listen(3000, (err) => {
    if (err){console.log("Server Error");}
    else{console.log("server running");}
})