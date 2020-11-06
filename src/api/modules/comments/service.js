import Service from '../../core/Service'
import CommentRepository from './repository'

export default class CommentService extends Service{
    static instance;
  
    static getService() {
        if(!CommentService.instance)
        {
            CommentService.instance = new CommentService(CommentRepository.getRepository())
        }
        return CommentService.instance
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