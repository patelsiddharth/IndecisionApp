const multiplier = {
    numbers : [2,4,51,22],
    multiplyBy : 2,
    Multiply() {
        return this.numbers.map( num => num * this.multiplyBy);
    }
}

console.log(multiplier.Multiply());