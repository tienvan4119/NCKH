import Service from '../../core/Service'
import PropertyRepository from './repository'

export default class PropertyService extends Service{
    static instance;
  
    static getService() {
        if(!PropertyService.instance)
        {
            PropertyService.instance = new PropertyService(PropertyRepository.getRepository())
        }
        return PropertyService.instance
    }
    
    async getByIdWithRelation(id, column = []) {
        try {
            return await this.repository.getByIdWithRelation(id, column);
        } catch(err) {
        }
    }

    async getManyWithRelation(condition = {}, column = []) {
        try {
            return await this.repository.getManyWithRelation(condition, column);
        } catch {

        }
    }
}