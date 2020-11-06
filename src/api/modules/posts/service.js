import Service from '../../core/Service'
import PostRepository from './repository'

export default class PostService extends Service{
    static instance;
  
    static getService() {
        if(!PostService.instance)
        {
            PostService.instance = new PostService(PostRepository.getRepository())
        }
        return PostService.instance
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