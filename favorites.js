
// Передбачає, що 'games' масив доступний (можна підключити зовні або повторити)
const games = JSON.parse(localStorage.getItem("allGames")) || [];

document.addEventListener("DOMContentLoaded", () => {
  const gameList = document.getElementById("game-list");

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favGames = games.filter(game => favorites.includes(game.name));

  function showGameDetails(game) {
    const detailDiv = document.getElementById("game-details");
    detailDiv.innerHTML = `
      <h2>${game.name}</h2>
      <img src="${game.cover}" alt="${game.name}">
      <p><strong>Рік:</strong> ${game.year}</p>
      <p><strong>Жанр:</strong> ${game.genre}</p>
      <p><strong>Ціна:</strong> ${game.price}</p>
      <p>${game.description}</p>
    `;
  }

  favGames.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    card.innerHTML = `
      <img src="${game.cover}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p><strong>Рік:</strong> ${game.year}</p>
      <p><strong>Жанр:</strong> ${game.genre}</p>
      <div class="btn-group">
        <a href="#" class="btn details-btn">Детальніше</a>
      </div>
    `;

    card.querySelector(".details-btn").addEventListener("click", (e) => {
      e.preventDefault();
      showGameDetails(game);
    });

    gameList.appendChild(card);
  });
});
