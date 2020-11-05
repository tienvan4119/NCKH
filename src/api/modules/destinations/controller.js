import Controller from '../../core/Controller'
import DestinationService from './service';

export default class DestinationController extends Controller{

    service = DestinationService.getService();

    constructor() {
        super(DestinationService.getService());
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