function isBig(thing) {
    if (thing == 0 || thing == 1 || thing == 2) {
        return false
    }
    return true
}
console.log(isBig(1))    // false
console.log(isBig([2]))  // false
console.log(isBig([3]))  // true
