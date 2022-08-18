// 1. Sélectionnez l'élément avec l'id #list et enregistrez dans une variable le résultat.
var result = document.getElementById("list");
// 2. console.log(result)
console.log(result);
// 3. Stockez tous les enfants du résultat dans une nouvelle variable appelée allChildren et console.log(allChildren)
var allChildren = result.childNodes;
console.log(allChildren);
// 4. Stocker les enfants du résultat dans une nouvelle variable appelée children et console.log(children)
var children = result.children;
console.log(children);
// 5. console log premier enfant
console.log(result.firstElementChild);
// 6. console log le dernier enfant
console.log(result.lastElementChild);
