const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2a4cf5584amshb2d423b2db488e2p1969dejsn6d8c6bc546ac",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const mainDiv = document.createElement("div"); // Ana div elementi

fetch(
  "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc",
  options
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((game) => {
      const gameDiv = document.createElement("div"); // Her bir oyun için div elementi
      mainDiv.classList.add("game", "row");
      gameDiv.classList.add("col-4", "p-5");
      gameDiv.innerHTML = `
		  <h2>${game.title}</h2>
		  <img src="${game.thumbnail}" alt="${game.title}">
		  <p>${game.short_description}</p>
		`;
      mainDiv.appendChild(gameDiv); // Ana div elementine oyun div elementini ekle
    });
  })
  .catch((err) => console.error(err));

// document.body.appendChild(mainDiv); // Ana div elementini sayfaya ekle
