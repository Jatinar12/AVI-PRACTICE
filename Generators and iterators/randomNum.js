function* randomNum() {
    while(true) {
        yield Math.floor(Math.randon() * 100)
    }
}

const it = randomNum();
function getRandonNumber() {
    return it.next().value
}

console.log(getRandonNumber())