/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        let id = document.getElementById("hero-id").value;
        fetch('http://localhost:3000/heroes') // si c'est vrai, il retourne une promesse : https://www.grafikart.fr/tutoriels/fetch-1017
            .then(function (response) {
                return response.json()
            }).then(function (data) {
                // console.log(data);
            });



        const deletePost = async function (data) {
            let response = await fetch('http://localhost:3000/heroes' + "/" + id, {
                method: 'DELETE',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            })
            let responseretour = await fetch('http://localhost:3000/heroes');
            let responseData = await responseretour.json()
            console.log(responseData);


        }
        deletePost({

            // id: document.getElementById("hero-id").value,

        })

    }) // fin du click



})();