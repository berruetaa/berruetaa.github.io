class Sudoku {
    constructor(){
        this.grid = Array.from({ length: 9 }, () => Array(9).fill(' '));
    }

    printSudoku(){
        console.log(" -----------------------------")
        for(let i=0; i<this.grid.length; i++){
            if(i != 0 && i%3 == 0){
                console.log(" -----------------------------")
            }
            let string = ""
            for(let j=0; j<this.grid[i].length; j++){
                if(j%3 == 0){
                    string += "|"
                }
                string += " "+this.grid[i][j]+" "
            }
            console.log(string + "|")
        }
        console.log(" -----------------------------")
    }

    rowCheck(val, index){
        return this.grid[index].includes(val)
    }

    colCheck(val, index){
        for(let i=0; i<9; i++){
            if(this.grid[i][index] == val){
                return true
            }
        }
        return false
    }

    subgrid(val, row, col){
        for(let i=Math.floor(row/3)*3; i<(Math.floor(row/3)*3)+3; i++){
            for(let j=Math.floor(col/3)*3; j<(Math.floor(col/3)*3)+3; j++){
                if(this.grid[i][j] == val){
                    return true
                }
            }
        }
        return false
    }

    generateSudoku(dif){
        let num = "123456789"
        for(let i=0; num.length > 0 && i < 9; i++){
            let index = Math.floor(Math.random() * num.length)
            let val = num.substring(index, index+1)
            this.grid[0][i] = val
            num = num.replace(val, '')
        }

        this.solver()
        this.removeValues(dif)
    }

    removeValues(dif){
        for(let i=0; i<dif; i++){
            let row = Math.floor(Math.random() * 9)
            let col = Math.floor(Math.random() * 9)
            this.grid[row][col] = ' '
        }
    }

    solver(){
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                if(this.grid[i][j] == ' '){
                    for(let val=1; val<10; val++){
                        if(!(this.rowCheck(val, i) || this.colCheck(val, j) || this.subgrid(val, i, j))){
                            this.grid[i][j] = val
                            if(this.solver()){
                                return true
                            }
                            this.grid[i][j] = ' '
                        }
                    }
                    return false
                }
            }
        }
        return true
    }
}

function testing(){
    let sudoku = new Sudoku()
    sudoku.generateSudoku(50)
    console.log("Puzzle: ")
    sudoku.printSudoku()
    console.log("Solution: ")
    if(sudoku.solver()){
        sudoku.printSudoku()
    }else{
        console.log("No solution exists")
    }
}

testing()