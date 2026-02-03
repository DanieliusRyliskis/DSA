function searchMatrix(matrix: number[][], target: number): boolean {
  const r: number = matrix.length
  const c: number = matrix[0].length
  const size: number = r * c;
  let p1: number = 0
  let p2: number = size - 1;

  while (p1 <= p2){
    const m: number = Math.floor(p1 + (p2 - p1) / 2);
    const rIndex: number = Math.floor(m / c);
    const cIndex: number = m % c;
    if (matrix[rIndex][cIndex] === target) return true;
    else if (matrix[rIndex][cIndex] < target) p1 = m + 1;
    else if (matrix[rIndex][cIndex] > target) p2 = m - 1;
  }
  return false
};

// const input = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// console.log(searchMatrix(input, 8));
