import Repository from '../../core/Repository'
import Destination from "../../../database/schemas/Destinations"

export default class DestinationRepository extends Repository {

    static instance;

    constructor(model) {
        super(model)
    }


    static getRepository()
    {
        if(DestinationRepository.instance == null)
        {
            DestinationRepository.instance = new DestinationRepository(Destination)
        }
        return DestinationRepository.instance
    }
    
    getByIdWithRelation(id, column = []) { 
        return this.model.findById(id).populate('brand').populate('category');
    }

    getManyWithRelation(condition = {}, column = []) {
        return this.model.find(condition).populate('brand').populate('category');
    }
}
