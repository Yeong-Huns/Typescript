/**
 * Omit_Type
 */

interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

function createPost(post: Omit<Post, 'createdAt'>){
    return {
        ...post,
        createdAt: new Date()
    }
}

console.log(
    createPost({
        title: 'node VS spring',
        content: '노드 재밌어요  ㅎㅎ'
    })
)