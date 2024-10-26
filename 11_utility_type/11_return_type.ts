/**
 * Return Type
 */
type ReturnTypeSample = ReturnType<()=>number>; // number

type FunctionSign = (x: number, y: number) => string;

type ReturnTypeSample2 = ReturnType<FunctionSign> // string