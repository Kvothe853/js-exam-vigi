/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  const kg = +document.getElementById("search").value;
  if (kg) convertKg(kg);
});

function convertKg(kg) {
  // converting kg to lb, g and oz
  lb = (kg * 2.2046).toFixed(2).replace(/[.,]00$/, "");
  g = (kg / 0.001).toFixed(2).replace(/[.,]00$/, "");
  oz = (kg * 35.274).toFixed(2).replace(/[.,]00$/, "");

  // output update
  document.getElementById("output").innerHTML = `
  <p>Svarai: <span>${lb}</span> lb</p>
  <p>Gramai: <span>${g}</span> g</p>
  <p>Uncijos: <span>${oz}</span> oz</p>
  `;
}
