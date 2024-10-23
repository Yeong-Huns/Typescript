/**
 * Visibility Keyword
 *
 * 1) public (기본값) - 어디든 접근이 가능하다.
 * 2) protected - 현재 클래스 및 하위 (자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근 가능하다.
 */
class PropertyTestParent{
    public publicProperty = 'public property';
    protected protectedProperty = 'protected property';
    private privateProperty = 'private property';
    #jsPrivateProperty = 'js private property'; // -> 실제 자바스크립트에 존재함

    test(){
        this.publicProperty;
        this.privateProperty;
        this.protectedProperty;
        this.#jsPrivateProperty;
    }
}

class PropertyTestChild extends PropertyTestParent{
    test(){
        this.publicProperty;
        this.protectedProperty; // -> 이 내부에서만 사용가능
        //this.protectedProperty;
        //this.#jsPrivateProperty;
    }
}

const instance = new PropertyTestChild();

instance.publicProperty;
// instance.protectedProperty -> 불가능