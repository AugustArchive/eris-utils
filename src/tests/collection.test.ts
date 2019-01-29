import { Collection } from '../index';
import { inspect } from 'util';

const coll = new Collection<boolean>();
console.info(`> Collection:\n${inspect(coll)}`);

coll.set('yes', true);
console.info(`> Collection:\n${inspect(coll)}`);

let a = coll.filter((s) => s === true);
console.info(`> Results: ${a}`);

const b = coll.delete('yes');
console.info(`> Results: ${b}`);