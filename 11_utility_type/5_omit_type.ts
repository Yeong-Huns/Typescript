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
interface User {
    name: string;
    age: number;
    email: string;
    createdAt: Date;
}

function signUp(newUser: Omit<User, 'createdAt'>): User{
    return {
        ...newUser,
        createdAt: new Date()
    }
}

console.log(
    signUp({
        name: '김영훈',
        age: 31,
        email: '1q2w3e4r@gmail.com'
    })
)
