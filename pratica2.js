//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let altura = parserFloat(prompt('Altura em metros: '));
let peso = parseFloat(prompt ('Peso em kg: '));

function calculoIMC() {
    let imc = parseFloat((peso/(altura*altura)));
    alert (`O IMC é igual a ${imc}`);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let numero = parseInt(prompt('Escreva o número inteiro'));

while(){
    numero > 0;
    numero--;
    
}

Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
