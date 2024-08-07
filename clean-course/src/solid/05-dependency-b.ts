import {JsonDataBaseService, LocalDataBaseService, PostProvider} from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // Aplicando el principio dependency inversion DIP
    // Inyección de dependecia
    constructor( private postProvider: PostProvider ) {}

    /*  async getPosts() {
        const jsonDB = new LocalDataBaseService();
        this.posts = await jsonDB.getFakePosts();

        return this.posts;
    }*/

    async getPosts() {
        //const jsonDB = new LocalDataBaseService();
        this.posts = await this.postProvider.getPost();
        return this.posts;
    }
}