const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ananyapramod04:8136988796@cluster0.nu5shqq.mongodb.net/moviedb?retryWrites=true&w=majority&appName=Cluster0').then(res=>{
    console.log('DB is connected');
}).catch((error)=>{
console.log('error in connection');
})