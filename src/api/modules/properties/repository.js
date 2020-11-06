import Repository from '../../core/Repository'
import Property from "../../../database/schemas/Properties"

export default class PropertyRepository extends Repository {

    static instance;

    constructor(model) {
        super(model)
    }


    static getRepository()
    {
        if(PropertyRepository.instance == null)
        {
            PropertyRepository.instance = new PropertyRepository(Property)
        }
        return PropertyRepository.instance
    }

}
