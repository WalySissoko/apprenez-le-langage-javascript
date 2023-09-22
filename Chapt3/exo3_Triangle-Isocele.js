function afficherTriangle(hauteur) {
  for (let i = 0; i < hauteur; i++) {
    let ligne = "";
    for (let j = 0; j < hauteur - i - 1; j++) {
      ligne += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      ligne += "*";
    }
    console.log(ligne);
  }
}

let hauteur = 5;
afficherTriangle(hauteur);