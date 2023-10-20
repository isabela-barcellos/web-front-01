/*
- Escreva um loop (for ou while) qu exiba a frase abaixo no console;
- substitua o "x" pela informação correta;
- "x" deve começar em 1 na 1ª exibição da frase e em 10 a última;
- Exiba a frase 10x no console.

"Esta é a Xª vez que esta frase é exibida no console."
*/
x=1
while(x<=10){
    console.log(`Esta é a ${[x]}ª vez que esta frase é exibida no console.`);
    x++;}
    
//correção 
for(let i = 0; i <= 10; i++){
    console.log(`Esta é a ${i+1}ª vez que esta frase é exibida no console.`)
}