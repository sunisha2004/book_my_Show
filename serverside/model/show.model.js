import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: { type: String },  
    duration:{ type:String },
    category: { type:String },
    release: { type:String },
    language: { type:String },
    rating: { type:String },
    screen: { type:String },
    certificate: { type:String },
    cover: { type:String },
    banner: {type:String }
    
});


export default mongoose.model.show||mongoose.model('show',movieSchema)