const set1 = new Set()
set1.add(1),
set1.add(2),
set1.add(3)

const iterator= set1.entries()
console.log(iterator.next().value);
