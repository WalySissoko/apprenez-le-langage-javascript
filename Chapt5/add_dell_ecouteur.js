// Fonction à appeler lorsque l'événement "click" se produit
function handleClick(event) {
  alert("Vous avez cliqué sur l'élément !");
}

// Ajouter un écouteur d'événements "click" à un élément
element.addEventListener("click", handleClick);

// Supprimer un écouteur d'événements "click" d'un élément
element.removeEventListener("click", handleClick);