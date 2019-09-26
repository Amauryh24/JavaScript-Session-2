/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    compteur = 0;
    document.getElementById("run").addEventListener("click", () => {

        fetch('http://localhost:3000/heroes') // si c'est vrai, il retourne une promesse : https://www.grafikart.fr/tutoriels/fetch-1017
            .then(function (response) {
                return response.json()
            }).then(function (data) {
                // console.log(data);
            });



        const insertPost = async function (data) {
            let response = await fetch('http://localhost:3000/heroes', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            }) // fin de la réponse
            let responseretour = await fetch('http://localhost:3000/heroes');
            let responseData = await responseretour.json()
            console.log(responseData);

        }
        if (name === "")


            insertPost({
                id: '',
                name: document.getElementById("hero-name").value,
                alterEgo: document.getElementById("hero-alter-ego").value,
                abilities: document.getElementById("hero-powers").value,



            })






    })
})();