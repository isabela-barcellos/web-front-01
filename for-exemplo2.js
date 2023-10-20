let frutas = ["maça", "banana", "uva", "pera"];

console.log(frutas[1])//vai percorrer item por item e ostrar qual está na posição 1

console.log(frutas.length); //cotagem de quanos item existem na lista

for(let i = 0; i < frutas.length; i++){
    console.log(`-R$ ${frutas[i]}`);
}