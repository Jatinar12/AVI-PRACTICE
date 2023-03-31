
// function* timestampGenerator() {
//     console.log(Date.now());
//     yield;
//     console.log('execution continued');
// }

// const it = timestampGenerator();
// it.next()
// it.next()

function* timestampGenerator() {
    var ts = Date.now();
    console.log('original ts:', ts)
    yield ts;
    console.log('boo')
    var additionalTime = yield;
    console.log('additionalTime:', additionalTime);
    if (additionalTime) {
        ts = ts + additionalTime;
    }
    console.log('updated ts: ', ts)
}

const it = timestampGenerator();
const originalTimestamp = it.next();
console.log(originalTimestamp)
it.next()
it.next(1000 * 60)

