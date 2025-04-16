const express = require('express')
const conn = require('./utility/connectdb')
const cors = require('cors')

const app = express();
const port =5000;
app.use(cors())
app.use(express.json())


const startServer = async() =>{
    try{
        await conn()
        app.listen(port,()=>{
            console.log(`Server is running on a ${port}`);
        })
    }
    catch{
        console.log('failed to start Server',error)
        process.exit(1)
    }
}

startServer()