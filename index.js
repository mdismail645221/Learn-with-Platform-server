const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const categorys = require('./data/category.json');
const courses = require(`./data/courses.json`);

app.get('/', (req, res)=>{
    res.send('Education learning is Running.')
})


app.get('/category/', (req, res)=> {
    res.send(categorys)
})

app.get('/courseItmes/', (req, res)=>{
    res.send(courses)
})

app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    const singleCourses = courses.find(singleC => singleC.id == id);
    res.send(singleCourses)
})



app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})