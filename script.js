const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2a4cf5584amshb2d423b2db488e2p1969dejsn6d8c6bc546ac",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const gameListDiv = document.getElementById("game-list");

fetch(
  "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc",
  options
)
  .then((response) => response.json())
  .then((data) => {
    const firstThreeGames = data.slice(0, 6);
    const firstThreeGamesHTML = firstThreeGames
      .map(
        (game) => `
        <div class="col-12 col-md-4 game-img-top rounded mt-4">
        <div class="d-flex">
        <p class="text-white three-text" onclick="Swal.fire({
          title: '${game.title}',
          text: '${game.short_description}',
          imageUrl: '${game.thumbnail}',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          footer: '<a>${game.developer}</a>',
        })
        ">${game.title}</p>
        <div class="d-flex align-items-center">
        <p class="game-type">${game.genre}</p>
        </div>
        </div>
          <img onclick="Swal.fire({
          title: '${game.title}',
          text: '${game.short_description}',
            customClass: {
              content: 'my-swal-text'
            },
          imageUrl: '${game.thumbnail}',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          footer: '<a>${game.developer}</a>',
        })
        " class="thumbnail" src="${game.thumbnail}" alt="${game.title}">
        <div class="mt-3 text-center"><a href="${game.game_url}" class="game__url">Hemen Üye Ol !</a></div>
        </div>
      `
      )
      .join("");

    const firstThreeGamesDiv = document.createElement("div");
    firstThreeGamesDiv.classList.add("row", "justify-content-center");
    firstThreeGamesDiv.innerHTML = firstThreeGamesHTML;

    const containerDiv = document.createElement("div");
    containerDiv.appendChild(firstThreeGamesDiv);
    containerDiv.classList.add("container");

    gameListDiv.appendChild(containerDiv);
  })
  .catch((err) => console.error(err));
