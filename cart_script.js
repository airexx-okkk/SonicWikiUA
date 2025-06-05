let cart = [];

function showGameDetails(game) {
  const details = document.getElementById("game-details");
  if (!details) return;

  details.innerHTML = `
    <h2>${game.name}</h2>
    <img src="\${game.cover}" alt="\${game.name}" style="width: 100%; border-radius: 10px; margin-bottom: 10px;">
    <p><strong>Жанр:</strong> \${game.genre}</p>
    <p><strong>Рік:</strong> \${game.year}</p>
    <p><strong>Ціна:</strong> \${game.price}</p>
    <p>\${game.description}</p>
    <button class="btn" onclick='addToCart(\${JSON.stringify(game)})'>🛒 Додати до кошика</button>
  `;
}

function addToCart(game) {
  cart.push(game);
  renderCart();
}

function renderCart() {
  let cartContainer = document.getElementById("cart");
  if (!cartContainer) {
    cartContainer = document.createElement("div");
    cartContainer.id = "cart";
    cartContainer.style.position = "fixed";
    cartContainer.style.bottom = "20px";
    cartContainer.style.right = "20px";
    cartContainer.style.background = "#1a1a1a";
    cartContainer.style.color = "white";
    cartContainer.style.padding = "15px";
    cartContainer.style.borderRadius = "10px";
    cartContainer.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    cartContainer.style.maxWidth = "300px";
    cartContainer.style.zIndex = "9999";
    document.body.appendChild(cartContainer);
  }

  if (cart.length === 0) {
    cartContainer.innerHTML = "<strong>🛒 Кошик порожній</strong>";
    return;
  }

  let total = 0;
  let items = cart.map((game, index) => {
    const price = parseFloat(game.price.replace('$', '')) || 0;
    total += price;
    return \`
      <div style="margin-bottom: 8px;">
        \${game.name} - \${game.price}
        <button onclick="removeFromCart(\${index})" style="margin-left: 10px;">❌</button>
      </div>
    \`;
  }).join("");

  cartContainer.innerHTML = \`
    <strong>🛒 Ваш кошик:</strong><br><br>
    \${items}
    <hr>
    <strong>Разом: \$\${total.toFixed(2)}</strong>
  \`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}