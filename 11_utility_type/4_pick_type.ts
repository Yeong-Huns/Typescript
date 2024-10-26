/**
 * Pick Type
 */
interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

function createPost(post: Post): Post{
    return post;
}

createPost({
    title: 'node VS 스프링',
    content: 'node 로도 엔터프라이즈급 서비스를 만들 수 있을까요?',
    createdAt: new Date()
}) // -> 이 createPost 함수의 문제점 : 매번 new Date() 를 선언해줘야 하는 단점이 있음

/**
 * title 과 content 만 입력하고 , 자동으로 new Date() 값이 들어가도록 할 순 없을까?
 */

function createPost2(post: Pick<Post, 'title'| 'content'>): Post {
    return {
        ...post, // -> 스프레드 연산자로 title 과 content 만 받음
        createdAt: new Date() // -> createAt 은 함수에서 자동으로 처리
    }
}

console.log(
createPost2({
    title: 'node VS spring',
    content: 'node 로도 엔터프라이즈급 서비스를 만들 수 있을까요?',
})
)
