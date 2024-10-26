/**
 * Template Literal
 */
type KimYeongHun = 'Kim Yeong Hun';

// Upper Case
type KimYeongHunUpper = Uppercase<KimYeongHun>; //'Kim Yeong Hun' -> "KIM YEONG HUN"

//Lower Case
type KimYeongHunLower = Lowercase<KimYeongHunUpper>; //"KIM YEONG HUN" -> "kim yeong hun"

// Capitalize
type KimYeongHunCapital = Capitalize<KimYeongHunLower>; // "kim yeong hun" -> "Kim yeong hun" : 첫번째 글자만 대문자로 만든다.

// Uncapitalize
type KimYeongHunUnCapital = Uncapitalize<KimYeongHunCapital> // "Kim yeong hun" -> "kim yeong hun" : 모두 소문자로 돌아옴
type KimYeongHunUnCapital2 = Uncapitalize<KimYeongHunUpper> // "KIM YEONG HUN" -> "KIM YEONG HUN" : Capitalize 로 대문자로 만든 앞글자가 아니면 , 바뀌지 않음

