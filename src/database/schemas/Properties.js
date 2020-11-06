import mongoose from 'mongoose'

const { Schema } = mongoose
const PropertySchema = new Schema({
    id:{
        type:Schema.Types.ObjectId,
        required: true
    },
    destination_id:{
        type: Schema.Types.ObjectId ,
        required:true
    },
    name:{
        type:String,
        required: true
    }

})
export default mongoose.model("properties", PropertySchema)