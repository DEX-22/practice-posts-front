import { AxiosResponse } from 'axios'
import {defineStore} from 'pinia'
import PostService from '../services/PostService'

interface Post{
    title: string
    author: string
    content: string
}
interface IStatesPost{
    posts:Post[],
    post:Post
}
interface IActionsPost{
    fillPost: Promise<void>
}
// <string,IStatesPost,{},IActionsPost>
export const postStore = defineStore('posts',{
    state : ()=>({
        posts: [] as Post[],
        post:{
            title:'',
            author:'',
            content:''
        } as Post,

    }),
    actions:{
        async fillPosts(){
            const data = await PostService.getPosts()
            this.posts = data
        },
        async insertPost(){
            
            const data = await PostService.insertPost(this.post)

            this.posts.unshift(this.post)
            this.clearPost()
            
        },
        clearPost(){
            this.post = {
                title:'',
                author:'',
                content:''
            }
        }
    }
})


