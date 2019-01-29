declare module '@maika.xyz/eris-utils' {
    /** The version of the `eris-utils` component for Maika. */
    export const version: string;

    /** Hold a bunch of things inside of an Map. */
    export class Collection<T> extends Map<string | number, T> {
        /**
         * Filter out something and returns an Array of it.
         * @param fn The function to filter out
         * @returns The thing you were looking for but in an array
         */
        public filter(fn: (i: T) => boolean): T[];

        /**
         * Map out what stuff you need and return an Array of it
         * @param fn The function to map out
         * @returns The mapped object but in an array
         */
        public map(fn: (i: T) => any): T[];
    }

    /** Utilities for different resources */
    export class Util {
        /**
         * Check if something is a function
         * @param fn The function
         * @returns If it is or not
         */
        public static isFunction(fn: Function): boolean;

        /**
         * Clones an object
         * @param obj The object to clone
         * @returns The object cloned
         */
        public static clone<T>(obj: T): T;
    }
}