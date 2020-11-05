import express from 'express'
import http from 'http'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import routes from '../api/routes';


class ExpressLoader{
    
    constructor()
    {
        this.app = express()
        this.server = http.Server(this.app)
    }

    setting()
    {
        //:LOGGING
        this.app.use(morgan('dev'))

        // PARSE REQUEST
        this.app.use(bodyParser.urlencoded({extended:false}))
        this.app.use(bodyParser.json())

        // 3rd party middleware
        // CORS settings
        this.app.use((req, res, next) =>{
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Method', 'GET, PUT, POST, DELETE, PATCH, OPTION, HEAD')
            res.header('Access-Control-Allow-Headers', 'Origin, X-request-With, Content-Type, Accept, Authorization')
            next();
        })
        // this.app.use(cors())
        //Swaggers
        
    }

    boot()
    {
        this.setting()
        this.app.use("/", routes)
        this.server.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`);

        })
    }
}
export default ExpressLoader