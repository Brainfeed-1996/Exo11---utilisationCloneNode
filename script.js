const noeudADupliquer = document.querySelector("p:nth-child()");

const noeudDuplique = noeudADupliquer.cloneNode(true);

// noeudDuplique.innerHTML = "Je suis dupliqué";

document.body.appendChild(noeudDuplique);

console.log(noeudDuplique);
console.log(noeudADupliquer);
console.log(document);
console.log(maDiv);
