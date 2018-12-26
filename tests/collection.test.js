const { Collection } = require('../src/index');
const coll = new Collection();

coll.set('owo', { owo: true });
coll.filter((o) => !!o.owo);

console.log(coll);