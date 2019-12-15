export const mult = a => b => a * b;

export function twice(a) {
    return mult(2)(a);
};

export function triple(a){
    return mult(3)(a);
}