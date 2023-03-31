function* errorHandling() {
    try {
        yield 1;
        throw('this is another error')
        yield 2;
        yield 3;
    } catch (error) {
        console.error(error)
    }
}

const errorIt = errorHandling();
console.log(errorIt.next())
console.log(errorIt.next())