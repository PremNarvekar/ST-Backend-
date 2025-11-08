const express = require('express')

const app = express()

app.use(express.json())

let note = []

app.get('/' , (req , res) => {
    res.send("Hello Billinoire")
})

app.post('/note', (req , res)=>{
    console.log(req.body)
    note.push(req.body)
    res.json({
        message: "Added New Data"
    })

    
})

app.get('/note' , (req , res )=> {
    res.json(note)
})

app.delete('/note/:index' , (req , res)=> {
    const index = req.params.index
    delete note[index]
    res.json({
        message: "Message delete"
    })



})

app.patch('/note/:index' , (req , res)=> {
    const index = req.params.index
    const {title} = req.body
    note [index].title = title

    res.json({
        message:"Message Updated"
    })
})

app.listen(3000 , ()=> {
    console.log("Server is Started")
})






// const express = require('express')

// const app = express();

// app.use(express.json())

// let note = []


// app.get('/' , (req , res) =>{
//     res.send("Hello ")
    
// })

// app.post('/note', (req, res)=>{
//     console.log(req.body)
//     note.push(req.body)
//     res.json({
//         message:"Data Added"
//     })
// })

// app.get('/note' , (req , res)=> {
//     res.json(note)
// })
// app.delete('/note/:index' , (req , res) => {
//     const index = req.params.index
//     delete note[index]
//     res.json({
//         message:'note delete succefully'
//     })
// })


// app.patch('/note/:index', (req , res) => {
//     const index = req.params.index
//     const {title} = req.body

//     note[index].title = title

//     res.json({
//         message: "Note update succefully"
//     })
// })

// app.listen(3000, ()=>{
//     console.log('Server is Staring')
// })