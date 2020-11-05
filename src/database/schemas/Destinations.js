import mongoose from 'mongoose'

const { Schema } = mongoose
const DestinationSchema = new Schema({
    id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    ,name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

export default mongoose.model("destinations", DestinationSchema)