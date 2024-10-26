"use strict";
/**
 * Omit_Type
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createPost(post) {
    return {
        ...post,
        createdAt: new Date()
    };
}
console.log(createPost({
    title: 'node VS spring',
    content: '노드 재밌어요  ㅎㅎ'
}));
