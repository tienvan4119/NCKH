import Controller from '../../core/Controller'
import CommentService from './service';

export default class CommentController extends Controller{

    service = CommentService.getService();

    constructor() {
        super(CommentService.getService());
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