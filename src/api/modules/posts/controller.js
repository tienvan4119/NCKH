import Controller from '../../core/Controller'
import PostService from './service';

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