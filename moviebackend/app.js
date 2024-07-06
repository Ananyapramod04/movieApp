const express=require('express');
const app =new express();
const cors=require('cors');
const PORT=4000;
const movieModel=require('./model/MovieData')
app.use(cors());
app.use(express.json())
require('./connection');
app.get('/movies',async(req,res)=>{
    try{
        const data=await movieModel.find();
        res.send(data)
    }catch(error){
        res.send('Data not found');
    }
})
//Post API
app.post('/addmovie',async(req,res)=>{
    try{
        var item=req.body;
        const datasave=new movieModel(item);
        const savedata=await datasave.save();
        res.send('Post successfull')

    }catch(error){
        console.log(error)

    }
})
//Update api
app.put('/editmovie/:id',async(req,res)=>{
    try{
        const data=await movieModel.findByIdAndUpdate(req.params.id,req.body)
        res.send('Updated successfully')
    }
    catch(error){
        console.log(error)
    }
})
app.delete('/removemovie/:id',async(req,res)=>{
    try{
    await movieModel.findByIdAndDelete(req.params.id);
    res.send('Deleted Successfully')
    }catch(error){
        console.log(error)
    }
    
})

app.listen(PORT,()=>{
    console.log('The server is running on port 4000')
})