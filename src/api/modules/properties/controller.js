import Controller from '../../core/Controller'
import PropertyService from './service';

export default class PropertyController extends Controller{

    service = PropertyService.getService();

    constructor() {
        super(PropertyService.getService());
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