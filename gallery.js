document.addEventListener("DOMContentLoaded", () => {
  const games = JSON.parse(localStorage.getItem("allGames")) || [];
  const galleryGrid = document.querySelector(".gallery-grid");

  games.forEach(game => {
    const img = document.createElement("img");
    img.src = game.cover;
    img.alt = game.name;
    galleryGrid.appendChild(img);
  });
});