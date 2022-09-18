import axios from 'axios'

interface Post {
    title: string,
    author: string,
    content: string
}

class PostService {

    baseUrl = 'http://localhost:8000/posts'

    insertPost = async (post: Post) => {

    const headers:object = { 
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': '*', 
                'Content-Type':'application/json' 
                }

        try {
            const { title, author, content }: Post = post

            const data = await axios.post(
                        this.baseUrl, 
                        { title, author, content }, 
                        headers 
                )
            console.log(data)
            return data

        } catch (e) {

            console.error(e.request)

        }


    }

    getPosts = async () => {
        try {
            const { data } = await axios.get(this.baseUrl)

            return data

        } catch (e) {

            console.error(e)

        }
    }
}


export default new PostService