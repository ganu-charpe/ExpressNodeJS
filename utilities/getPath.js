import path from 'path';

export default function getAbsPath(file) {
    return path.resolve(file);
}

export function getPublicPath(file) {
    return path.resolve(file)
}