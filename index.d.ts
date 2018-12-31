declare module '@maika.xyz/eris-utils' {
    export const version: string;
    export class Collection<K, V> extends Map<K, V> {
        public keyArray: K[];
        public valArray: V[];
        public filter(fn: (i: V) => boolean): V[];
        public map(fn: (i: V) => any): V[];
    }
}