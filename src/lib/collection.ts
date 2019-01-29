export class Collection<T> extends Map<string | number, T> {
    constructor() {
        super();
    }

    /**
     * Filters out what it belives in
     * @param fn The filter to filter out
     * @returns The array of the results
     */
    filter(fn: (i: T) => boolean): T[] {
        const results: T[] = [];
        for (const item of this.values()) {
            if (fn(item))
                results.push(item);
        }

        return results;
    }

    /**
     * Maps out what it believe in
     * @param fn The function to map
     * @returns The results
     */
    map(fn: (i: T) => any): T[] {
        const results: T[] = [];
        for (const item of this.values()) {
            results.push(fn(item));
        }

        return results;
    }
}