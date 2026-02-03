const array = [2, 4, 1, 3, 6, 8, 1, 9, 8]

function quick_sort (arr, low, high){
    if (low >= high) {
        return
    }

    const pivotIndex = partition(arr, low, high)

    // Repeating on one side
    quick_sort(arr, low, pivotIndex - 1)
    // Repeating on the other side
    quick_sort(arr, pivotIndex + 1, high)
}

function partition (arr, low, high) {

    const pivot = arr[high];
    let index = low - 1;

    for (let i = low; i < high; ++i){
        // comparison to the pivot
        index++;
        if (arr[i] <= pivot){
            const temporary = arr[i]
            arr[i] = arr[index]
            arr[index] = temporary
        }
    }
    index++;
    arr[high] = arr[index]
    arr[index] = pivot 

    return index
}

quick_sort(array, 0, array.length - 1)
