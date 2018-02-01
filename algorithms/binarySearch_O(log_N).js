const arr = [8, 87, 3, 0, -12, 88, 4351, 0.7];

var binarySearch = function(array, value) {
    var guess,
        min = 0,
        max = array.length - 1;

    while(min <= max){
        guess = Math.floor((min + max) /2);
        if(array[guess] === value)
            return guess;
        else if(array[guess] < value)
            min = guess + 1;
        else
            max = guess - 1;
    }

    return -1;
}

console.log(binarySearch(arr, 0));