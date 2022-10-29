var valor1 = 30;
var valor2 = 30;
var valor3 = 30;
var valor4 = 30;
var valor5 = 30;
var valorIgual = 0;
var valor = 0;

if(valor1 >= valor2 && valor1 >= valor3 && valor1 >= valor4 && valor1 >= valor5 ){
    console.log( valor1 ,'É o maior valor!');
    valor = valor1;
}else if(valor1 <= valor2 && valor2 >= valor3 && valor2 >= valor4 && valor2 >= valor5  ){
    console.log(valor2 ,'É o maior valor!');
    valor = valor2;
}else if(valor1 <= valor3 && valor2 <= valor3 && valor3 >= valor4 && valor3 >= valor5 ){
    console.log(valor3 ,'É o maior valor!');
    valor = valor3;
}else if(valor1 <= valor4 && valor2 <= valor4 && valor3 <= valor4 && valor4 >= valor5 ){
    console.log(valor4 ,'É o maior valor!');
    valor = valor4;
}else if(valor5 >= valor1 && valor5 >= valor2 && valor5 >= valor3 && valor5 >= valor4 ){
    console.log(valor5 ,'É o maior valor!');
    valor = valor5;
}else{
    console.log('Erro!');
}
