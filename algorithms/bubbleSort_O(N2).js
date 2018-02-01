const arr = [8, 87, 3, 0, -12, 88, 4351, 0.7];

function bubbleSort(arr){
    for(let i = arr.length-1; i > 1; i--){
        for(let j=0; j < i; j++){
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));