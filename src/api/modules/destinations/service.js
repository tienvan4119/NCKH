import Service from '../../core/Service'
import DestinationRepository from './repository'

export default class DestinationService extends Service{
    static instance;
  
    static getService() {
        if(!DestinationService.instance)
        {
            DestinationService.instance = new DestinationService(DestinationRepository.getRepository())
        }
        return DestinationService.instance
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