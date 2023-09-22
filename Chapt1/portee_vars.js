let variableGlobale = 'Je suis globale!';

function maFonction() {
  let variableLocale = 'Je suis locale!';
  console.log(variableGlobale); // 'Je suis globale!'
  console.log(variableLocale); // 'Je suis locale!'

  if (true) {
    let variableDeBloc = 'Je suis dans un bloc!';
    console.log(variableDeBloc); // 'Je suis dans un bloc!'
  }
}

maFonction();

console.log(variableGlobale); // 'Je suis globale!'
console.log(variableLocale); // Erreur : variableLocale n'est pas définie
console.log(variableDeBloc); // Erreur : variableDeBloc n'est pas définie