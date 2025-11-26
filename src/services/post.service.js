import postRepository from '../repositories/post.repository.js';

class PostService {
    async createPost(author, data) {
        return await postRepository.createPost({...data, author});
    }

    async getPostById(id) {
        const post = await postRepository.findPostById(id);
        if(!post) {
            throw new Error(`Post with id ${id} not found`)
        }
        return post;
    }

    async addLike(postId) {
        // TODO add like to post by id
        throw new Error('Not implemented')
    }

    async getPostsByAuthor(author) {
        // TODO return posts by author
        throw new Error('Not implemented')
    }

    async addComment(postId, commenter, message) {
        // TODO add comment to post by id
        throw new Error('Not implemented')
    }

    async deletePost(postId) {
        const post = await postRepository.deletePost(postId);
        if(!post) {
            throw new Error(`Post with id ${postId} not found`)
        }
        return post;
    }

    async getPostsByTags(tagsString) {
        // TODO return posts by tags. Tags example: python,java,j2ee
        throw new Error('Not implemented')
    }

    async getPostsByPeriod(dateFrom, dateTo) {
        // TODO return posts by period. Date format: YYYY-MM-DD
        throw new Error('Not implemented')
    }

    async updatePost(postId, data) {
        // TODO update post by id. Data example: {
        // 	"title": "Jakarta EE",
        //     "tags":["Jakarta EE", "J2EE"],
        //     "content": "Java is the best for backend"
        // }
        throw new Error('Not implemented')
    }
}

export default new PostService()