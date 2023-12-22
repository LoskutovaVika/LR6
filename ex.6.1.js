let A=Number(prompt('Введите число А', 0)), B=Number(prompt('Введите число B', 0)), C=Number(prompt('Введите число C', 0));

function n(x){
    if (x < 0){
        return  1
    }else{
        return 0
    }
}
alert(n(A)+n(B)+n(C));