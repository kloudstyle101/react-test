import * as U from './util';
export const picsumUrl = (width: number, height: number) => `https://picsum.photos/${width}/${height}`;
export const randomImage = (w: number = 1000, h: number = 800, delta: number = 200): string => {
    const width = U.random(w - delta, w + delta);
    const height = U.random(h - delta, h + delta);
    return picsumUrl(width, height);
};
export const randomAvatar = () => {
    const size = U.random(200, 400);
    return picsumUrl(size, size);
}