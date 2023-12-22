 let matrix=[], M = Number(prompt('Введите количеством строк в матрице', 0)), N = Number(prompt('Введите количеством столбцов в матрице', 0));
let k, OutputOne='', OutputTwo='';

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

//ввод k строго из диапозона [1;M]
do{
    k = Number(prompt('Введите номер строки:', 0));
}while(!(1 <= k && k<=M));

//удаление k-строки (начиная с индекса k удаляем 1 элемент)
matrix.splice(k-1,1)

//вывод матрицы
for (let i=0; i < matrix.length; i++) {
    for (let j=0; j < N; j++) {
        OutputTwo += matrix[i][j] + ' ';
    }
    OutputTwo += '\n'
}
alert(OutputTwo)