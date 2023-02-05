export const makeArray = (length: number) => new Array(length).fill(null);
export const range = (min:number, max:number) => makeArray(max - min).map((_, i) => i + min);
export const random = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;
