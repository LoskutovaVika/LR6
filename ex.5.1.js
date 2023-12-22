let matrix = [], M = Number(prompt('Введите количеством строк в матрице', 0)), N = Number(prompt('Введите количеством столбцов в матрице', 0));
let NewMatrix=[],OutputOne = '', OutputTwo = '';

//Заполнение массива произвольными числами
for (let i=0; i < M; i++) {
    matrix[i] = [];
    for (let j=0; j< N; j++) {
        matrix[i][j] = Math.floor(Math.random() *10);
    }
}
//вывод матрицы
for (let i=0; i < M; i++) {
    for (let j=0; j< N; j++) {
    OutputOne += matrix[i][j] + ' ';
    }
    OutputOne += '\n'
}
alert(OutputOne)
//реализация условия задания
for (let i=0; i < M; i++){
    NewMatrix[i] = [];
    if (i % 2 != 0){
        for (let j = N-1; j >= 0; j--) {
            NewMatrix[i].push(matrix[i][j]);
        }
    }else {
        for (let j = 0 ; j < N; j++) {
            NewMatrix[i].push(matrix[i][j]);    
        }    
    } 
}
//вывод матрицы
for (let i=0; i < M; i++) {
    for (let j=0; j< N; j++) {
    OutputTwo += NewMatrix[i][j] + ' ';
    }
    OutputTwo += '\n'
}
alert(OutputTwo)