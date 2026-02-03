function isValidSudoku(board: string[][]): boolean {
  const rows: Map<number, Set<string>> = new Map()
  const columns: Map<number, Set<string>> = new Map()
  const squares: Map<string, Set<string>> = new Map()

  for (let r = 0; r < 9; r++){
    for (let c = 0; c < 9; c++){
      const value: string = board[r][c]
      const squareKey: string = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`
      const isRowNotValid: boolean = rows.has(r) && rows.get(r).has(value)
      const isColumnNotValid: boolean = columns.has(c) && columns.get(c).has(value)
      const isSquareNotValid: boolean = squares.has(squareKey) && squares.get(squareKey).has(value)
      const isRowEmpty: boolean = !rows.has(r)
      const isColumnEmpty: boolean = !columns.has(c)
      const isSquareEmpty: boolean = !squares.has(squareKey)

      if (value === '.') continue;
      if (isRowNotValid || isColumnNotValid || isSquareNotValid) return false;
      if (isRowEmpty) rows.set(r, new Set());
      if (isColumnEmpty) columns.set(c, new Set());
      if (isSquareEmpty) squares.set(squareKey, new Set());
      
      rows.get(r).add(value)
      columns.get(c).add(value)
      squares.get(squareKey).add(value)
    }
  }
  return true
}

const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];


