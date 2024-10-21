/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number;

type PersonType = {
    name: string,
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
    name: '지수',
    age: 32,
    company: 'YG',
    companyRegistrationNumber: 'xxxxyyyyyzzzz'
}

type PetType = {
    petName: string,
    petAge: number,
}

type CompanyOrPet = PersonType & (PetType | CompanyType);

const companyOrPet: CompanyOrPet = {
    //PersonType
    name: '김영훈',
    age: 32,

    // CompanyType
    company: '넵튠',
    companyRegistrationNumber: 'xxxxyyyyzzzz',

    //petType
    petName: '오리',
    petAge: 8,
}

// CompanyType 과 PetType 둘중에 하나를 충족하면 , 프로퍼티가 하나씩 사라져도 상관없음

