let MainMatrix, M = Number(prompt('Введите количеством строк в матрице', 0)), N = Number(prompt('Введите количеством столбцов в матрице', 0));
let k, NewMatrix, OutputOne, OutputTwo;

//Заполнение массива произвольными числами
function CreateMatrix(x,y){
    let matrix = [];
    for (let i=0; i < x; i++) {
        matrix[i] = [];
        for (let j=0; j< y; j++) {
            matrix[i][j] = Math.floor(Math.random() *10);
        }
    }
    return matrix;
}

//вывод матрицы
function OutputMatrix(matrix){
    let x = '';
    for (let i=0; i < matrix.length; i++) {
        for (let j=0; j< matrix[i].length; j++) {
            x += matrix[i][j] + ' ';
        }
        x += '\n';
    }
    return x;
}

//ввод k строго из диапозона [1;M] и удаление k-строки (начиная с индекса k удаляем 1 элемент)
function DeleteString(matrix){
    do{
        k = Number(prompt('Введите номер строки:', 0));
    }while(!(1 <= k && k<=M));

    matrix.splice(k-1,1);
    return matrix;
}

MainMatrix = CreateMatrix(M,N);
OutputOne = OutputMatrix(MainMatrix);
alert(OutputOne);

NewMatrix = DeleteString(MainMatrix);
OutputTwo = OutputMatrix(NewMatrix);
alert(OutputTwo)
