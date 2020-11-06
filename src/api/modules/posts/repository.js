import Repository from '../../core/Repository'
import Post from "../../../database/schemas/Posts"

export default class PostRepository extends Repository {

    static instance;

    constructor(model) {
        super(model)
    }


    static getRepository()
    {
        if(PostRepository.instance == null)
        {
            PostRepository.instance = new PostRepository(Post)
        }
        return PostRepository.instance
    }

}
