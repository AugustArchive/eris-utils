declare module '@maika.xyz/eris-utils' {
    /** The version of the `eris-utils` component for Maika. */
    export const version: string;

    /** Hold a bunch of things inside of an Map. */
    export class Collection<K, V> extends Map<K, V> {
        /**
         * The key array
         */
        public keyArray: K[];

        /**
         * The value array
         */
        public valArray: V[];

        /**
         * Filter out something and returns an Array of it.
         * @param fn The function to filter out
         * @returns The thing you were looking for but in an array
         */
        public filter(fn: (i: V) => boolean): V[];

        /**
         * Map out what stuff you need and return an Array of it
         * @param fn The function to map out
         * @returns The mapped object but in an array
         */
        public map(fn: (i: V) => any): V[];
    }

    /** Utility to convert Discord embeds into JSON */
    export class MessageEmbed {
        constructor(data?: any);

        public title: string;
        public description: string;
        public type: string;
        public url: string;
        public timestamp?: number;
        public color?: number;
        public fields?: EmbedField;
        public thumbnail?: EmbedThumbnail;
        public image?: EmbedImage;
        public author?: EmbedAuthor;
        public footer?: EmbedFooter;
        public createdAt?: number;
        public addField(name: StringResolvable, value: StringResolvable, inline?: boolean): this;
        public addBlankField(inline?: boolean): this;
        public setAuthor(name: string, iconURL?: string, url?: string): this;
        public setTitle(title: string): this;
        public setColor(colour: ColorResolvable): this;
        public setDescription(desc: string): this;
        public setURL(uri: string): this;
        public setFooter(text: string, iconURL?: string): this;
        public setTimestamp(t?: Date | number): this;
        public build(): EmbedObject;
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
         * Resolves a string
         * @param str The resolved string
         * @returns The string resolved
         */
        public static resolveString(str: StringResolvable): string;

        /**
         * Resolves a colour
         * @param colour The resolved colour
         * @returns The color resolved
         */
        public static resolveColor(colour: ColorResolvable): number;

        /**
         * Clones an object
         * @param obj The object to clone
         * @returns The object cloned
         */
        public static clone<T>(obj: T): T;
    }

    /** The resolved string type */
    export type StringResolvable = string | string[];

    /** The resolved colour type */
    export type ColorResolvable = number | number[] | string;

    /** The embed field type */
    export type EmbedField = {
        name: string;
        value: string;
        inline: boolean;
    }[];

    /** The embed author type */
    export type EmbedAuthor = {
        name: string;
        url?: string;
        iconURL?: string;
    };

    /** The embed footer type */
    export type EmbedFooter = {
        text: string;
        iconURL?: string;
    };

    /** The embed thumbnail type */
    export type EmbedThumbnail = { url: string; };

    /** The embed image type */
    export type EmbedImage = { url: string; };

    /** The embed object */
    export interface EmbedObject {
        title: string;
        description: string;
        type: string;
        url: string;
        timestamp?: number;
        color?: number;
        fields?: EmbedField;
        thumbnail?: EmbedThumbnail;
        image?: EmbedImage;
        author?: EmbedAuthor;
        footer?: EmbedFooter;
    }
}