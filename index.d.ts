declare module '@maika.xyz/eris-utils' {
    export const version: string;
    export class Collection<T> extends Map<string | number, T> {
        public filter(fn: (i: T) => boolean): T[];
        public map(fn: (i: T) => any): T[];
    }
}