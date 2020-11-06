import mongoose from 'mongoose'

const { Schema } = mongoose
const CommentSchema = new Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    destination_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    content:{
        type: String,
        required: true
    },
    rating:{
        type:String,
        required:true
    }
})
export default mongoose.model("comments", CommentSchema)
