// 6. Faça um script que leia três números e mostre-os em ordem decrescente.
let num1 = parseInt(prompt("Entre com o primeiro número: "));
let num2 = parseInt(prompt("Entre com o segundo número: "));
let num3 = parseInt(prompt("Entre com o terceiro número: "));

if (num1>num2 && num1>num3){
    if(num2>num3){
        document.write("Em ordem decrescente " + num1 +  ", " + num2 + ", " + num3);
    }else{
        document.write("Em ordem decrescente " + num1 +  ", " + num3 + ", " + num2);
    }
} else if (num2>num1 && num2>num3){
    if(num1>num3){
        document.write("Em ordem decrescente " + num2 +  ", " + num1 + ", " + num3);
    }else{
        document.write("Em ordem decrescente " + num2 +  ", " + num3 + ", " + num1);
    }
}else if (num3>num1 && num3>num2){
    if(num1>num2){
        document.write("Em ordem decrescente " + num3 +  ", " + num1 + ", " + num2);
    }else{
        document.write("Em ordem decrescente " + num3 +  ", " + num2 + ", " + num1);
    }
}