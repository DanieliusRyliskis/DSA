const array = [3, 2, 4, 1, 5, 9, 11, 7, 1];


for (let i = 0; i < array.length; i++) {
    // - 1 because j + 1 would jump out of an array
    // - i exclude items that are already sorted from previous iteration
    for (let j = 0; j < array.length - 1 - i; ++j) {
        if (array[j] > array[j + 1]) {
            const current = array[j];
            array[j] = array[j + 1];
            array[j + 1] = current;
        }
    }
}

console.log(array)
