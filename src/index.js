const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 

const multer = require('multer');
const uploads = multer({
    dest:'images'
})

app.post('/upload',uploads.single('file'),(req,res)=> {
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
const auth = require('./middleware/auth')




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



