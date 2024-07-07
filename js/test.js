var layer = document.querySelector(".details")
let closebtn = document.getElementById("btnClose")
let game =  document.querySelector(".col")





/*
async function GetGames() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a27da97175msh85eeeb317dfdbbbp1536b2jsn1ea7a5539264",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const api = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
    options
  );
  const response = await api.json();
  console.log(response);

  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452";  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

GetGames();



*/ 

// game.addEventListener("click", function(){
//     layer.classList.remove("d-none")
// })

// function hidelayer() {

//     layer.classList.add("d-none")
// }
// closebtn.addEventListener("click", hidelayer)


/************************************************************************************************************************************/




const options = {
	method: 'GET',
    // to access database
	headers: {
		'x-rapidapi-key': '2872353ae7msh88ef23af4143a78p1a5ac2jsndb3743b0fb0b',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
async function getGames(){

    let request = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter" , options)
    let response = await request.json()
    console.log(response);
}
getGames()