"use strict";
/**
 * Namespace
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Home;
(function (Home) {
    class Idol {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    Home.yuJin = new Idol('안유진', 23);
})(Home || (Home = {}));
var Post;
(function (Post) {
    class User {
        constructor(email, name) {
            this.email = email;
            this.name = name;
        }
    }
    // new Idol() TS2304: Cannot find name Idol
    const admin = new User('abcd@naver.com', Home.yuJin.name);
    console.log(admin);
})(Post || (Post = {}));
var Comment;
(function (Comment) {
    const name = 'comment';
    let Detail;
    (function (Detail) {
        const page = 'detail';
        console.log(name);
        console.log(page);
    })(Detail || (Detail = {}));
    console.log('---------');
    console.log(name);
    //console.log(page)
})(Comment || (Comment = {}));
