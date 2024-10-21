/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error
}

type GlobalApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State
    paginateUsers: State | undefined;
    banUser: State | null;
}

// -> 중복되는 코드가 발생하는게 좀 별로다...

type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser']
    paginateUsers: GlobalApiStatus['paginateUsers']
    banUser: GlobalApiStatus['banUser']
}

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
}

type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'paginateUsers' | 'banUser'>;
// Initial type:
// {getUser: State, paginateUsers: State | undefined, banUser: State | null}

type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;
//Initial type:
// {getUser: State, paginateUsers: State | undefined, banUser: State | null}

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'getUser';

type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}
// GlobalApiStatus 의 모든 키 밸류를 가져옴 ,

// 하지만 원하는 것은 getPosts 를 제외한 키, 밸류를 가져오는 것이므로 조금 아쉬움
type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'> ]: GlobalApiStatus[k];
}
// Exclude 라는 유틸리티 클래스를 사용하여, GlobalApiStatus 에서 getPosts 라는 키 값을 제외 할 수 있음

type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'> ]?: GlobalApiStatus[k];
}
//  Initial type:
// {getUser?: State, paginateUsers?: State | undefined, banUser?: State | null}
// 전부 Optional 로 만들 수 있음

interface LoadingStatus {
    type: 'loading';
    data: string[];
}
interface ErrorStatus{
    type: 'error',
    message: string;
}
type FetchStatus = LoadingStatus | ErrorStatus;
type StatusType = FetchStatus['type'] // 'loading' 또는 'error'