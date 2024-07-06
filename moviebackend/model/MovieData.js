const mongoose=require('mongoose');
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDesc:String,
    movieImage:String,
    movieDir:String
})
const MovieData=mongoose.model('movie',movieSchema);
module.exports=MovieData