import Controller from '../../core/Controller'
import PostService from './service';
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host:"localhost:9200"
});
import Destinations from '../../../database/schemas/Destinations';
export default class PostController extends Controller{

    service = PostService.getService();

    constructor() {
        super(PostService.getService());
    }
   
    async getByIdWithRelation(req, res) {
        const { id } = req.params 
        res.send(await this.service.getByIdWithRelation(id));
    }

    async getManyWithRelation(req, res) {
        const condition = req.query
        res.send(await this.service.getManyWithRelation(condition));
    }
    
}