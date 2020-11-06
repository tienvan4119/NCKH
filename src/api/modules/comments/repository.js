import Repository from '../../core/Repository'
import Comment from "../../../database/schemas/Comments"

export default class CommentRepository extends Repository {

    static instance;

    constructor(model) {
        super(model)
    }


    static getRepository()
    {
        if(CommentRepository.instance == null)
        {
            CommentRepository.instance = new CommentRepository(Comment)
        }
        return CommentRepository.instance
    }
    
    getByIdWithRelation(id, column = []) { 
        return this.model.findById(id).populate('brand').populate('category');
    }

    getManyWithRelation(condition = {}, column = []) {
        return this.model.find(condition).populate('brand').populate('category');
    }
}
