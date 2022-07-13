/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.querySelector("#btn").addEventListener("click", () => {
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((data) => creatingAvatars(data))
    .catch((error) => console.error());

  function creatingAvatars(data) {
    // clearing output content
    document.querySelector("#output").innerHTML = "";

    // creating avatar card
    data.forEach((avatar) => {
      const card = document.createElement("div");
      card.className = "avatarCard";

      // avatar image
      const img = document.createElement("img");
      img.src = avatar.avatar_url;
      img.setAttribute("alt", "avatar picture");

      // avatar name
      const avatarName = document.createElement("p");
      avatarName.textContent = avatar.login;

      // appending avatar card
      card.append(img, avatarName);
      document.querySelector("#output").append(card);
    });
  }
});
