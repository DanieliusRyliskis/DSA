function searchMatrix(matrix, target) {
    const r = matrix.length;
    const c = matrix[0].length;
    const size = r * c;
    let p1 = 0;
    let p2 = size - 1;
    while (p1 <= p2) {
        const m = Math.floor(p1 + (p2 - p1) / 2);
        const rIndex = Math.floor(m / c);
        const cIndex = m % c;
        if (matrix[rIndex][cIndex] === target)
            return true;
        else if (matrix[rIndex][cIndex] < target)
            p1 = m + 1;
        else if (matrix[rIndex][cIndex] > target)
            p2 = m - 1;
    }
    return false;
}
;
// const input = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// console.log(searchMatrix(input, 8));
