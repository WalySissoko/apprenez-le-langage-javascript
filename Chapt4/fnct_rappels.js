function traitementLong(callback) {
  // Simule un traitement long
  setTimeout(() => {
    callback('Résultat du traitement');
  }, 2000);
}

traitementLong((resultat) => {
  console.log(resultat); // Affiche "Résultat du traitement" après 2 secondes
});