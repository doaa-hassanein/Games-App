import { Ui } from "./ui.module.js";


export class Details {
    // card in ui so call ui here

    constructor(id) {

        this.ui = new Ui();

        document.getElementById("btnClose").addEventListener("click", () => {

            document.querySelector(".games").classList.remove("d-none");  // اظهر جميع الالعاب

            document.querySelector(".details").classList.add("d-none"); // اخفى التفاصيل بتاعة اللعبة
        });

        this.getDetails(id);
    }
    // هبعت ليها ال id بتاع كل لعبة
   async getDetails(idGames) {

        const loading = document.querySelector(".loading");

        loading.classList.remove("d-none"); // نظهر صفحة اللووود لحد ما الداتا تيجي من ال api

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '2872353ae7msh88ef23af4143a78p1a5ac2jsndb3743b0fb0b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

         let api= await  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}` , options)

         let response = await api.json()

         new Ui().displayDetails(response)
         
         loading.classList.add("d-none");
    }
}

