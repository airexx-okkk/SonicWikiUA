const games = [
    {
      name: "Sonic the Hedgehog",
      year: 1991,
      genre: "Platformer",
      price: "$9.99",
      description: "Класика, з якої все почалося.",
      cover: "images/sonic1.jpg",
            theme: "sounds/greenhill.mp3"
    },
    {
      name: "Sonic the Hedgehog 2",
      year: 1992,
      genre: "Platformer",
      price: "$9.99",
      description: "Друга частиа класики,з новим персонажим Тейлзом найкращим другом Соніка.",
      cover: "images/sonic2.jpg",
      theme: "sounds/opening2.mp3"
    },
    {
      name: "Sonic CD",
      year: 1993,
      genre: "Platformer",
      price: "$4.99",
      description: "Подорожі в часі, нова героїня Емі Роуз та дебют Метал Соніка — стильна та експериментальна частина серії.",
      cover: "images/sonicCD.jpg",
      theme: "sounds/sonicCD.mp3"
    },
    {
      name: "Sonic the Hedgehog 3",
      year: 1994,
      genre: "Platformer",
      price: "$9.99",
      description: "Розширена історія, нові зони та перша поява Наклза — частина грандіозної дилогії разом із Sonic & Knuckles.",
      cover: "images/sonic3.jpg",
      theme: "sounds/sonic3.mp3"
    },
    {
      name: "Sonic & Knuckles",
      year: 1994,
      genre: "Platformer",
      price: "$9.99",
      description: "Іноваційна lock-on технологія дозволила поєднати гру з Sonic 3. Можна грати як за Соніка, так і за Наклза.",
      cover: "images/sonicknuckles.jpg",
      theme: "sounds/knuckles.mp3"
    },
   {
      name: "Sonic the Hedgehog Chaos",
      year: 1993,
      genre: "Platformer",
      price: "$4.99",
      description: "Перша гра, де Тейлз став повноцінним ігровим персонажем. Вийшла на портативній Game Gear.",
     cover: "images/sonicchaos.jpg",
     theme: "sounds/chaos.mp3"
    },
    {
      name: "Sonic Spinball",
      year: 1993,
      genre: "Pinball/Platformer",
      price: "$4.99",
      description: "Сонік у пінболі! Гібрид платформера та аркадного пінболу з темною, механічною атмосферою.",
      cover: "images/sonicspin.jpg",
      theme: "sounds/spinball.mp3"
    },
    {
      name: "Sonic Drift",
      year: 1994,
      genre: "Racing",
      price: "$3.99",
      description: "Перша гоночна гра серії на Game Gear. Сонік та друзі сідають за кермо картів.",
      cover: "images/sonicdrift.jpg",
      theme: "sounds/drift.mp3"
    },
    {
      name: "Sonic the Hedgehog Triple Trouble",
      year: 1994,
      genre: "Platformer",
      price: "$4.99",
      description: "Одна з найкращих портативних ігор 90-х, із глибшим сюжетом і новими лиходіями.",
      cover: "images/sonictrouble.jpg",
      theme: "sounds/triple.mp3"
    },
    {
      name: "Tails' Skypatrol",
      year: 1995,
      genre: "Shoot 'em up",
      price: "$3.99",
      description: "Незвична гра: Тейлз летить і кидає кільця. Дуже складна та нетипова.",
      cover: "images/tailsskypatrol.jpg",
      theme: "sounds/skypatrol.mp3"
    },
    {
      name: "Knuckles' Chaotix",
      year: 1995,
      genre: "Platformer",
      price: "$5.99",
      description: "Ексклюзив для Sega 32X. Командна механіка з персонажами команди Chaotix.",
      cover: "images/knuckleschaotix.jpg",
      theme: "sounds/chaotix.mp3"
    },
    {
      name: "Tails Adventure",
      year: 1995,
      genre: "Platformer/Adventure",
      price: "$4.99",
      description: "Повільніший, стратегічніший платформер про Тейлза на острові з гадами-механіками.",
      cover: "images/tailsadventure.jpg",
      theme: "sounds/tails.mp3"
    },
    {
      name: "Sonic Labyrinth",
      year: 1995,
      genre: " Puzzle / Isometric Platformer",
      price: "$3.99",
      description: "Сонік втратив швидкість і досліджує лабіринти з ключами. Незвичайна, але не дуже популярна гра.",
      cover: "images/soniclabyrint.jpg",
      theme: "sounds/labyrint.mp3"
    },
     {
      name: "Sonic The Fighters",
      year: 1996,
      genre: "Fighting",
      price: "$4.99",
      description: "3D-файтинг у мультяшному стилі з оригінальним ростером персонажів. Весела, хоч і проста аркадна гра.",
      cover: "images/sonicfighters.jpg",
      theme: "sounds/fighters.mp3"
    },
    {
      name: "Sonic 3D Blast",
      year: 1996,
      genre: " Isometric Platformer",
      price: "$5.99",
      description: "Ізометричний платформер зі збиранням флікків. Красива, але незграбна в керуванні.",
      cover: "images/Sonic3DBlast.jpg",
      theme: "sounds/3Dblast.mp3"
    },
    {
      name: "Sonic Blast",
      year: 1996,
      genre: "Platformer",
      price: "$3.99",
      description: "Остання 2D-гра для Game Gear. Візуально стилізована під 3D, але з простим геймплеєм.",
      cover: "images/sonic blast.jpg",
      theme: "sounds/blast.mp3"
    },
    {
      name: "Sonic Jam",
      year: 1997,
      genre: "Compilation",
      price: "$9.99",
      description:"Збірка класичних ігор з бонусним 3D-хабом. Перша поява повністю 3D-Соніка (у меню).",
     cover: "images/sonicjam.jpg",
     theme: "sounds/sonicjam.mp3"
    },
    {
      name: "Sonic R",
      year: 1997,
      genre: "Racing",
      price: "$4.99",
      description:"Гонки з бігом замість автомобілів. Відомий яскравим саундтреком і дивною фізикою.",
      cover: "images/SonicR.jpg",
      theme: "sounds/r.mp3"
    },
    {
      name: "Sonic Adventure",
      year: 1998,
      genre: "3D Adventure",
      price: "$9.99",
      description:"Перший повноцінний 3D-проєкт. Шість героїв, сюжет з катастрофами і система Чао.",
     cover: "images/sonicadventure.jpg",
     theme: "sounds/s1.mp3"
    },
    {
      name: "Sonic Pocket Adventure",
      year: 1999,
      genre: "2D Adventure",
      price: "$4.99",
      description:"Комбінує рівні з Sonic 2 і візуальний стиль Sonic 3. Міцна портативна гра для Neo Geo Pocket.",
      cover: "images/sonicpocket.jpg",
      theme: "sounds/pocet.mp3"
    },
    {
      name: "Sonic Shuffle",
      year: 2000,
      genre: "Party / Board Game",
      price: "$6.99",
      description:"Спроба створити аналог Mario Party. Випадковість і довгі раунди зіпсували враження.",
      cover: "images/sonicshuffle.jpg",
      theme: "sounds/shuffle.mp3"
    },
     {
      name: "Sonic Adventure 2",
      year: 2001,
      genre: "3D Adventure",
      price: "$9.99",
      description:"Два боки конфлікту: Герої vs Лиходії. Дебют Шедоу і одна з найулюбленіших історій фанатів.",
      cover: "images/sonicadventure2.jpg",
      theme: "sounds/s2.mp3"
    },
     {
      name: "Sonic Advence",
      year: 2001,
      genre: "2D Platformer",
      price: "$4.99",
      description:"Класичний платформер на GBA з сучасним виглядом. Вдало поєднує старе й нове.",
      cover: "images/sa.jpg",
      theme: "sounds/sa.mp3"
    },
    {
      name: "Sonic Advence 2",
      year: 2002,
      genre: "2D Platformer",
      price: "$4.99",
      description:"Швидший геймплей і нові персонажі. Один із найскладніших 2D-Sonic’ів.",
      cover: "images/sa3.jpg",
      theme: "sounds/sa2.mp3"
    },
    {
      name: "Sonic Mega Collection",
      year: 2002,
      genre: "Compilation",
      price: "$9.99",
      description:"Збірка класичних ігор із бонусним контентом. Чудовий старт для новачків серії.",
     cover: "images/sonimega.jpg",
     theme: "sounds/gems.mp3"
    },
    {
      name: "Sonic Heroes",
      year: 2003,
      genre: "3D Platformer",
      price: "$9.99",
      description:"Гра з 12 персонажами у 4 командах. Кожен рівень проходиться трійцею героїв із різними здібностями.",
      cover: "images/sonicheroes.jpg",
      theme: "sounds/heroes.mp3"
    },
    {
      name: "Sonic Battle",
      year: 2003,
      genre: "Fighting",
      price: "$4.99",
      description:"2D-файтинг на GBA з кастомним роботом Емерлом. Більше тактики, ніж очікуєш.",
      cover: "images/sonicbattle.jpg",
      theme: "sounds/sonicbattle.mp3"
    },
    {
      name: "Sonic Advance 3",
      year: 2004,
      genre: "2D Platformer",
      price: "$4.99",
      description:"Повертається командна механіка. Багато комбінацій героїв із унікальними стилями.",
      cover: "images/sa2.jpg",
      theme: "sounds/sa3.mp3"
    },
    {
      name: "Sonic Gems Collection",
      year: 2005,
      genre: "Compilaton",
      price: "$9.99",
      description:"Збірка рідкісних ігор, зокрема Sonic CD і Sonic the Fighters. Для справжніх колекціонерів.",
      cover: "images/sonicgems.jpg",
      theme: "sounds/Menu.mp3"
    },
    {
      name: "Shadow the Hedgehog",
      year: 2005,
      genre: "Action / Platformer",
      price: "$9.99",
      description:"Темна історія Шедоу з вогнепальною зброєю і нелінійним сюжетом. Спроба «дорослішання» серії — неоднозначно сприйнята.",
      cover: "images/sth.jpg",
      theme: "sounds/im.mp3"
    },
    {
      name: "Sonic Rush",
      year: 2005,
      genre: "2D Platformer",
      price: "$4.99",
      description:"Швидкий платформер для DS із 3D-боями та новою героїнею — Блейз. Один з найкращих портативних проєктів.",
      cover: "images/sonicrush.jpg",
      theme: "sounds/sonicrush.mp3"
    },
    {
      name: "Sonic Riders",
      year: 2006,
      genre: "Racing",
      price: "$6.99",
      description:"Гонки на антигравітаційних дошках з трюками й енергією. Стильна, але складна у керуванні гра.",
      cover: "images/sonicriders.jpg",
      theme: "sounds/ride.mp3"
    },
    {
      name: "Sonic the Hedgehog (2006)",
      year: 2006,
      genre: "3D Platformer",
      price: "$9.99",
      description:"Спроба перезапуску серії, що стала відома через баги й незграбну історію. Критично невдало, але культова серед фанатів.",
      cover: "images/sonic06.jpg",
      theme: "sounds/hisworld.mp3"
    },
    {
      name: "Sonic Rivals",
      year: 2006,
      genre: "Racing / Platformer",
      price: "$4.99",
      description:"Схожий на платформер, але з перегонною механікою один на один. Стильний реліз для PSP.",
      cover: "images/sonicrivals.jpg",
      theme: "sounds/rivals.mp3"
    },
    {
      name: "Sonic Rush Adventure",
      year: 2007,
      genre: "On-Rails Action",
      price: "$6.99",
      description:"Сонік у казковому світі 1001 ночі. Автоматичний біг і східна естетика.",
      cover: "images/sonicrushadventure.jpg",
      theme: "sounds/rush.mp3"
    },
    {
      name: "Sonic and the Secret Rings",
      year: 2007,
      genre: "Action / Platformer",
      price: "$10.99",
      description: "Це динамічна 3D-платформер пригода з унікальним управлінням рухами. Події відбуваються в чарівному світі 'Казок тисячі й однієї ночі'.",
      cover: "images/secret.jpg",
      theme: "sounds/secret.mp3",
    },

   {
      name: "Sonic Rivals 2",
      year: 2007,
      genre: "Racing / Platformer",
      price: "$4.99",
      description:"Більше героїв, парні режими та розширена сюжетна кампанія. Покращення у всьому порівняно з першою частиною.",
    cover: "images/sonicrivals2.jpg",
    theme: "sounds/rivals2.mp3"
    },
    {
      name: "Sonic Unleashed",
      year: 2008,
      genre: "3D Platformer / Action",
      price: "$9.99",
      description:"Денна частина — класичні швидкі 3D-рівні, нічна — бойова Werehog-форма. Ідеї цікаві, але баланс сумнівний.",
      cover: "images/sonicunleashed.jpg",
      theme: "sounds/unleashed.mp3"
    },
    {
      name: "Sonic Chronicles: The Dark Brotherhood",
      year: 2008,
      genre: "RPG",
      price: "$4.99",
      description:"Покрокова ролівка від BioWare. Глибокий сюжет і дослідження світу, але обмежений бойовий процес.",
      cover: "images/sonicchronicles.jpg",
      theme: "sounds/chronicles.mp3"
    },
    {
      name: "Sonic and the Black Knight",
      year: 2009,
      genre: "Action / Sword Combat",
      price: "$6.99",
      description:"Сонік з мечем у середньовічному сетинґу. Незвично, але неоднозначно сприйнята механіка бою.",
      cover: "images/sonicandblackknight.jpg",
      theme: "sounds/black.mp3"
    },
    {
      name: "Sonic the Hedgehog 4: Episode I",
      year: 2010,
      genre: "2D Platformer",
      price: "$6.99",
      description:"Сучасне переосмислення класичного стилю. Хороша ідея, але фізика й анімації залишили бажати кращого.",
      cover: "images/sonic41.jpg",
            theme: "sounds/41.mp3"

    },
    {
      name: "Sonic Colors",
      year: 2010,
      genre: "3D Platformer",
      price: "$9.99",
      description:"Веселий космічний платформер із новими здібностями Віспів. Один з найбільш схвально прийнятих 3D-проєктів.",
     cover: "images/soniccolors.jpg",
           theme: "sounds/colors.mp3"

    },
    {
      name: "Sonic Free Riders",
      year: 2010,
      genre: "Racing (Kinect)",
      price: "$6.99",
      description:"Гонки для Kinect з руховим керуванням. Ідея цікава, але виконання неідеальне.",
      cover: "images/sonicfree.jpg",
      theme: "sounds/free.mp3"
    },
    {
      name: "Sonic Generations",
      year: 2011,
      genre: " 2.5D/3D Platformer",
      price: "$9.99",
      description:"Ювілейна гра, де класичний і сучасний Сонік об’єднуються. Любима фанатами за ностальгію і баланс стилів.",
      cover: "images/sonicgenerations.jpg",
      theme: "sounds/generations.mp3"
    },
    {
      name: "Sonic the Hedgehog 4: Episode II",
      year: 2012,
      genre: "2D Platformer",
      price: "$6.99",
      description:"Покращення над першим епізодом — краща фізика, повернення Тейлза. Проте серія згорнулася після цього.",
     cover: "images/sonic42.jpg",
     theme: "sounds/42.mp3"
    },
     {
      name: "Sonic & All-Stars Racing Transformed",
      year: 2012,
      genre: "Racing",
      price: "$9.99",
      description:"Динамічні перегони з переходами між авто, човнами та літаками. Один з найуспішніших спін-офів.",
      cover: "images/racing.jpg",
      theme: "sounds/allstars.mp3"
    },
    {
      name: "Sonic Lost World",
      year: 2013,
      genre: "3D Platformer",
      price: "$9.99",
      description:"Нова етапна гра з оригінальними платформами та зміщенням перспективи. Графіка стильна, але рівні інколи здаються занадто лінійними.",
      cover: "images/soniclost.jpg",
      theme: "sounds/world.mp3"
    },
    {
      name: "Sonic Boom: Rise of Lyric",
      year: 2014,
      genre: "3D Action-Adventure",
      price: "$9.99",
      description:"Ребут класичних персонажів з новими дизайнами у світі Сонік Бум. Змішання бойової механіки з платформерними елементами, але велика кількість багів і невдалої анімації заважали оцінці гри.",
      cover: "images/boomrise.jpg",
      theme: "sounds/rise.mp3"
    },
    {
      name: "Sonic Boom: Shattered Crystal",
      year: 2014,
      genre: "2D Platformer",
      price: "$4.99",
      description:"Класичний платформер для 3DS з елементами дослідження і головоломками. Лінійна гра, яка все ж має цікаву механіку та графіку.",
      cover: "images/boomcrystal.jpg",
      theme: "sounds/crystal.mp3"
    },
    {
      name: "Sonic Runners",
      year: 2015,
      genre: "Endless Runner",
      price: "Free-To-Play",
      description:"Інді-гра на мобільних, що об’єднала класичний геймплей і систему нагород. Популярна, але в 2016 році закрита.",
      cover: "images/sonicrun.jpg",
      theme: "sounds/run.mp3"
    },
    {
      name: "Sonic Boom: Fire & Ice",
      year: 2016,
      genre: "2D Platformer",
      price: "$4.99",
      description:"Продовження Shattered Crystal, де додано нові здібності та механіка. Загалом — більше різноманітності, але без радикальних змін.",
     cover: "images/boomfire.jpg",
     theme: "sounds/fire.mp3"
    },
    {
      name: "Sonic Mania",
      year: 2017,
      genre: "2D Platformer",
      price: "$19.99",
      description:"Назад до класики! Ідеальна гра для фанатів старого Соніка. Вінтажна графіка та швидкісні рівні зі свіжим підходом.",
      cover: "images/sonicmania.jpg",
      theme: "sounds/mania.mp3"
    },
    {
      name: "Sonic Forces",
      year: 2017,
      genre: "3D Platformer",
      price: "$9.99",
      description:"Сонік та його новий командний союз проти Доктора Еггмана. Швидкі рівні з новими персонажами, але з дещо критикованим сюжетом і механікою.",
      cover: "images/sonicfroces.jpg",
      theme: "sounds/forces.mp3"
    },
    {
      name: "Team Sonic Racing",
      year: 2019,
      genre: "3D Platformer",
      price: "$19.99",
      description:"Гонки в стилі Mario Kart з командною механікою. Дуже весела гра з можливістю вибору ролей в команді для кожного гравця.",
     cover: "images/sonicteam.jpg",
     theme: "sounds/race.mp3"
    },
    {
      name: "Sonic Colors: Ultimate",
      year: 2021,
      genre: "3D Platformer",
      price: "$29.99",
      description:"Ремейк однієї з найкращих частин Sonic. Поліпшена графіка, нові можливості й покращене управління.",
      cover: "images/cal.jpg",
      theme: "sounds/cal.mp3"
    },
    {
      name: "Sonic Origins",
      year: 2022,
      genre: "Compilation",
      price: "$39.99",
      description:"Збірка класичних ігор Sonic (Sonic 1, 2, 3 & Knuckles, CD) з поліпшеними графікою та додатковим контентом. Чудовий спосіб пережити класичні пригоди.",
      cover: "images/sonicorigins.jpg",
           theme: "sounds/origins.mp3"

    },
    {
      name: "Sonic Frontiers",
      year: 2022,
      genre: "Action-Adventure",
      price: "$59.99",
      description: "Остання 3D-пригода у відкритому світі.",
      cover: "images/frontiers.jpg",
      theme: "sounds/front.mp3"
    },
    {
      name: "Sonic Superstars",
      year: 2023,
      genre: "2D Platformer",
      price: "$64.99",
      description: "Новий 2D-платформер з класичним геймплеєм і свіжими рівнями. Висока швидкість, цікаві механіки та нові персонажі.",
      cover: "images/sonicsuper.jpg",
      theme: "sounds/super.mp3"
    },
    {
      name: "Sonic Dream Team",
      year: 2023,
      genre: "Puzzle / Party",
      price: "Apple Arcade Subscription",
      description: "Мобільна гра на платформі Apple Arcade, де Сонік і його друзі вирішують головоломки. Спокійний і затишний спін-оф.",
     cover: "images/sonicdream.jpg",
     theme: "sounds/dream.mp3"
    },
    {
      name: "Sonic X Shadow Generations",
      year: 2024,
      genre: "2D/3D Platformer",
      price: "$69.99",
      description: "Ремастер Sonic Generations із новою історією за Шедоу. Нові рівні, покращена графіка та унікальні здібності темного героя.",
      cover: "images/shadowgenerations.jpg",
           theme: "sounds/shadow.mp3"

    },
    {
      name: "Sonic Rumble",
      year: 2024,
      genre: "Mini Games",
      price: "Free-To-Play",
      description: "Ціківі міні-ігри за персонажів Соніка але зараз є тільки в Японії",
     cover: "images/sonicrumble.jpg",
          theme: "sounds/rumble.mp3"

    },
  ];

// ==== ДАНІ ====
let currentAudio = null;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function toggleFavorite(gameName) {
  let favorites = getFavorites();
  if (favorites.includes(gameName)) {
    favorites = favorites.filter(name => name !== gameName);
  } else {
    favorites.push(gameName);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

const ringSound = new Audio("sounds/ring.mp3");

// ==== ОСНОВНИЙ ВИВІД ====
function renderGames() {
  const gameList = document.getElementById("game-list");
  if (!gameList) return;

  const searchQuery = document.getElementById("search").value.toLowerCase();
  const genreFilter = document.getElementById("filter-genre").value;
  const sortValue = document.getElementById("sort-year").value;

  let filteredGames = games.filter(game => {
    return (
      game.name.toLowerCase().includes(searchQuery) &&
      (genreFilter === "all" || game.genre.trim() === genreFilter)
    );
  });

  if (sortValue === "asc") {
    filteredGames.sort((a, b) => a.year - b.year);
  } else if (sortValue === "desc") {
    filteredGames.sort((a, b) => b.year - a.year);
  }

  gameList.innerHTML = "";
  filteredGames.forEach((game, index) => {
    const isFavorite = getFavorites().includes(game.name);

    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.cover}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p><strong>Рік:</strong> ${game.year}</p>
      <p><strong>Ціна:</strong> ${game.price}</p>
      <div class="button-group">
        <button class="btn" onclick="showGameDetails(${index})">Детальніше</button>
        <button class="btn fav-btn" onclick="toggleFavorite('${game.name}'); renderGames()">
          ${isFavorite ? "У обраному" : "У обране"}
        </button>
        <button class="btn" onclick="addToCart(${index})">До кошика</button>
      </div>
    `;
    gameList.appendChild(card);
  });
}

// ==== ПІДКАЗКА ДЕТАЛЕЙ ====
function showGameDetails(index) {
  const game = games[index];
  const details = document.getElementById("game-details");
  if (!details) return;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (game.theme) {
    currentAudio = new Audio(game.theme);
    currentAudio.volume = 0.5;
    currentAudio.play().catch(e => console.warn("Автовідтворення заблоковано:", e));
  }

  details.innerHTML = `
    <h2>${game.name}</h2>
    <img src="${game.cover}" alt="${game.name}" style="max-width:100%; border-radius:10px;">
    <p><strong>Жанр:</strong> ${game.genre}</p>
    <p><strong>Рік:</strong> ${game.year}</p>
    <p><strong>Ціна:</strong> ${game.price}</p>
    <p>${game.description}</p>
  `;
  details.scrollIntoView({ behavior: "smooth" });
}

// ==== КОШИК ====
function addToCart(index) {
  const game = games[index];
  cart.push(game);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  alert(`${game.name} додано в кошик!`);
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  if (!cartList) return;

  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Кошик порожній.</li>";
    return;
  }

  cart.forEach((game, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${game.name} — ${game.price}`;
    cartList.appendChild(li);
  });
}

function clearCart() {
  if (confirm("Очистити кошик?")) {
    cart = [];
    localStorage.removeItem("cart");
    renderCart();
  }
}

// ==== СТАРТ ====
document.addEventListener("DOMContentLoaded", () => {
  const genreSelect = document.getElementById("filter-genre");
  const genres = [...new Set(games.map(g => g.genre.trim()))];
  genres.sort().forEach(genre => {
    const opt = document.createElement("option");
    opt.value = genre;
    opt.textContent = genre;
    genreSelect.appendChild(opt);
  });

  document.getElementById("sort-year").addEventListener("change", renderGames);
  document.getElementById("filter-genre").addEventListener("change", renderGames);
  document.getElementById("search").addEventListener("input", renderGames);

  renderGames();
  renderCart();
});

// ==== ЗВУК КІЛЬЦЯ ====
document.addEventListener("click", (e) => {
  ringSound.currentTime = 0;
  ringSound.play().catch(() => {});
});