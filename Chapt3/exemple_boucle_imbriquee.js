let matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrice.length; i++) {
  for (let j = 0; j < matrice[i].length; j++) {
    console.log("Élément à la position (" + i + ", " + j + ") : " + matrice[i][j]);
  }
}