function vow(str){

    const count= str.match(/[aeiou]/gi).length;

    return count;
}
console.log(vow("Hello it's me JATIN"));