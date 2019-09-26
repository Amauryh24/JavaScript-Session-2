/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        // fetch('http://localhost:3000/heroes') // si c'est vrai, il retourne une promesse : https://www.grafikart.fr/tutoriels/fetch-1017
        //     .then(function (response) {
        //         return response.json()
        //     }).then(function (data) {
        //         console.log(data);

        //     })

        const getSuperHero = async function () {
            let response = await fetch('http://localhost:3000/heroes')
            let data = await response.json()
            console.log(data);
        }
        getSuperHero();

    });



})();