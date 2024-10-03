import express from 'express'

const app = express()


// this is express json | and I don't  know what I'm doing 
app.use(express.json())
app.get('/', (req, res) => res.status(200)
    .json({ message: 'what do you want from me I have changed it' }))


const PORT = 1000



app.listen(PORT, () => console.log('Enuaaa nunu not tested'))