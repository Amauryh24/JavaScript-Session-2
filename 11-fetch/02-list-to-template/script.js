/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fetch('http://localhost:3000/heroes') // si c'est vrai, il retourne une promesse : https://www.grafikart.fr/tutoriels/fetch-1017
            .then(function (response) {
                return response.json()
            }).then(function (data) {

                var template = document.getElementById("tpl-hero");


                for (let i = 0; i < data.length; i++) {
                    const multiClonageSupra = document.importNode(template.content, true);
                    console.log([i].name);

                    multiClonageSupra.querySelector(".name").innerText = data[i].name;
                    multiClonageSupra.querySelector(".alter-ego").innerText = data[i].alterEgo;
                    multiClonageSupra.querySelector(".powers").innerText = data[i].abilities;
                    document.querySelector("#target").appendChild(multiClonageSupra);
                }




            })





    })


})();