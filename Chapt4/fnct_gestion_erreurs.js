function traitementLong(callback) {
  // Simule un traitement long avec une erreur
  setTimeout(() => {
    const erreur = new Error('Une erreur est survenue');
    callback(erreur, null);
  }, 2000);
}

traitementLong((erreur, resultat) => {
  if (erreur) {
    console.error(erreur);
  } else {
    console.log(resultat);
  }
});