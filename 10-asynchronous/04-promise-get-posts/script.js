/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here


    document.getElementById("run").addEventListener("click", () => {

        window.lib.getPersons(promise)
    })


    function callback() {
        return new Promise((resolve, delay) => {
            console.log("C'est fait");
            // réussir une fois sur deux
            if (tabPerson == undefined) {
                resolve("Réussite");
            } else {
                delay("Échec");
            }
        })
    }

    const promise = callback();
    promise.then(resolve, delay);


})();