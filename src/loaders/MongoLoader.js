import { Mongoose } from "mongoose";

import mongoose from 'mongoose'
export default class MongoLoader{
    async boot() {
        try{
            mongoose.Promise = global.Promise;
            mongoose.connect(process.env.MONGO_CONNECTION, {
                useUnifiedTopology:true,
                useNewUrlParser:true
            })

        }catch(error){
            console.log(" Mongo Connection failed")
        }
    }
}