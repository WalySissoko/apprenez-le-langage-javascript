const variableGlobale = "Je suis globale";

function exemplePortee() {
  const variableLocale = "Je suis locale";
  console.log(variableGlobale); // Affiche "Je suis globale"
  console.log(variableLocale); // Affiche "Je suis locale"
}

exemplePortee();

console.log(variableGlobale); // Affiche "Je suis globale"
console.log(variableLocale); // Erreur : variableLocale n'est pas définie