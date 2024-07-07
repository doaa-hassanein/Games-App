import { Details } from "./datails.module.js"
import { Ui } from "./ui.module.js"

export class Games {
    constructor() {

        this.getGames("mmorpg"); // عشان اول ما الموقع يفتح يجيب الداتا دى علطول

        document.querySelectorAll(".menu a").forEach((link) => {

            link.addEventListener("click", (e) => {

                document.querySelector(".menu .active").classList.remove("active");

                e.target.classList.add("active");

                this.getGames(e.target.dataset.category);
            });
        });

        this.ui = new Ui();
    }

    async getGames(category) {

        const loading = document.querySelector(".loading");

        loading.classList.remove("d-none");

        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };

        const api = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
            options
        );
        const response = await api.json();  // شايل الداتا
        // call class ui to display data takes response that carry data 
        this.ui.displayDataGame(response);

        this.startEvent();

        loading.classList.add("d-none");   // شيل ال loading
    }

    // show details when click on each game
    startEvent() {
        document.querySelectorAll(".card").forEach((item) => {

            item.addEventListener("click", () => {

                // console.log("hi");
                const id = item.dataset.id;

                this.showDetails(id);
            });
        });
    }

    showDetails(idGame) {

        const details = new Details(idGame); // عشان لما انده عالفانكشن دى ياخد نسخة من لكلاس ui عشان اعرض 

        document.querySelector(".games").classList.add("d-none"); // نخفى صفحة كل الالعاب 

        document.querySelector(".details").classList.remove("d-none");  // نظهر صفحة التفاصيل بتاعة اللعبة اللى دوست عليها
    }
}