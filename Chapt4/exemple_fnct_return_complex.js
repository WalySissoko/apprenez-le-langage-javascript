function creerPersonne(nom, age) {
  return {
    nom: nom,
    age: age,
  };
}

const personne = creerPersonne("Fanta", 30);
console.log(personne); // Affiche { nom: "Fanta", age: 30 }