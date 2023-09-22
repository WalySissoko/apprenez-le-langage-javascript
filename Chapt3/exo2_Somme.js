function sommeTableau(nombres) {
  let somme = 0;
  for (let i = 0; i < nombres.length; i++) {
    somme += nombres[i];
  }
  return somme;
}

let tableau = [1, 2, 3, 4, 5];
console.log("La somme des éléments du tableau est : " + sommeTableau(tableau));