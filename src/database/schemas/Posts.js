import mongoose from 'mongoose'

const { Schema } = mongoose
const PostSchema = new Schema({
    id:{
        type:Schema.Types.ObjectId,
        required: true
    },
    destination_id:{
        type: Schema.Types.ObjectId,
        required:true
    },
    content:{ 
        type:String,
        required: true
    }

})
export default mongoose.model("posts", PostSchema)