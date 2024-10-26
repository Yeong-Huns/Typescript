/**
 * Non Nullable Type
 */

type NonNull = NonNullable<string | number | boolean | null | undefined | object>; // Initial type: string | number | boolean | object
// -> null 과 undefined 는 null 이 될 수 있기 때문에, 실제로 null 에 해당하기 때문에 제외된다.

