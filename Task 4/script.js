/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

function brandCard(brand) {
  brand.forEach((brand) => {
    // creating  card
    const card = document.createElement("div");
    card.className = "brandCard";

    // brand name
    const brandName = document.createElement("div");
    brandName.className = "brandName";
    brandName.textContent = brand.brand;

    //brand models list
    const models = document.createElement("div");
    models.className = "modelName";
    models.textContent = brand.models;

    card.append(brandName, models);
    document.getElementById("output").append(card);
  });
}

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((data) => brandCard(data))
  .catch((error) => console.error(error));
