const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/db/model/note.model')



const app = express()
app.use(express.json())

app.post('/note' ,async (req , res )=> {
    const {title, content} = req.body
    console.log(title, content)  

    await noteModel.create({
        title,content
    })

    res.json({
        message:"Message createed"
    })
})

app.get('/note' , async (req , res)=>{
    const note = await noteModel.find()

    res.json({
        message:"All meassage fetch succefully",
        note
    })
})

app.delete('/note/:id' , async(req, res)=> {
    const noteID = req.params.id

    await noteModel.findOneAndDelete({
        _id : noteID
    })

    res.json({
        message:'Message delete succesfull'
    })
     

})

app.patch('/note/:id' , async(req, res)=> {
    const noteID = req.params.id
    const{title , content} = req.body

    await noteModel.findOneAndUpdate({
        _id : noteID,
        
    },{
        title:title,
        content:content
    })

    res.json({
        message:"Message succfully updated"
    })
})





connectToDB()
app.listen(3000 , ()=> {
    console.log('Server is started')
})