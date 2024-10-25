/**
 * Class 에서 Generic 사용
 */
class Pagination<Data, Message>{
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;
}

const pgData =  new Pagination<number, string>();
pgData.data; // data: number[]
pgData.message; // message?: string | undefined
pgData.lastFetchedAt; // lastFetchedAt?: Date | undefined

class Pagination2<Data, Message>{
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;

    constructor(data: Data[], message?: Message, lastFetchedAt?:Date) {
        this.data =data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }
}
const pagination2 = new Pagination2([123,456]);
pagination2.data; // data: number[]
pagination2.message; // message: unknown
pagination2.lastFetchedAt; // lastFetchedAt?: Date | undefined

class DefaultGeneric<T= boolean>{
    data: T[] = [];
}
const defaultGeneric = new DefaultGeneric();
defaultGeneric.data; // const defaultGeneric: DefaultGeneric<boolean>
