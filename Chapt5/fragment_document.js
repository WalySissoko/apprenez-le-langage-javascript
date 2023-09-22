const fragment = document.createDocumentFragment();
const list = document.querySelector("#myList");

for (var i = 0; i < 10; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${i + 1}`;
  fragment.appendChild(listItem);
}

list.appendChild(fragment);