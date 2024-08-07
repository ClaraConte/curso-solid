import { PostService } from './05-dependency-b';
import {JsonDataBaseService, LocalDataBaseService, WebApiPostService} from "./05-dependency-c";

// Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deberíasn depender de absttraciones

// Main
(async () => {

    // const postService = new PostService();

    // const  provider = new JsonDataBaseService();
    // const  provider = new LocalDataBaseService();
    const  provider = new WebApiPostService();
    const postService = new PostService(provider);
    const posts = await postService.getPosts();

    console.log({ posts })


})();