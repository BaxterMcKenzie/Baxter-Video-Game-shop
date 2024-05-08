// Set up our data

const products = [
    {
        score: 'Metacritic Score - 94',
        price: '$50.99',
        name: 'Mario 64',
        description: 'Super Mario 64 is a 3D platformer in which the player controls Mario through various courses. Mario\'s abilities are far more diverse than in previous games.',
        image: './img/mario64.webp'
    },
    {
        score: 'Metacritic Score - 74',
        price: '$51.99',
        name: 'Mario Party 3',
        description: 'Mario Party is a party video game series featuring characters from the Mario franchise in which up to four players compete in a board game interspersed with minigames.',
        image: './img/marioparty3.webp'
    },
    {
        score: 'Metacritic Score - 89',
        price: '$9.99',
        name: 'Crash 2',
        description: 'Crash 2 - Cortex Strikes Back is a platform game. The goal of the game is to gather 25 crystals for Crash\'s nemesis Doctor Neo Cortex. The crystals are scattered between 25 different levels, accessible via Warp Rooms, which are hub areas of the game.',
        image: './img/crash2.webp'
    },
    {
        score: 'Metacritic Score - 90',
        price: '$57.39',
        name: 'Tombi 2',
        description: 'Tomba! 2: The Evil Swine Return is a side-scrolling platform-adventure game with RPG elements. The player controls the titular character Tomba, who must defeat the Evil Pigs and rescue his girlfriend Tabby',
        image: './img/tombi-2.webp'
    },
    {
        score: 'Metacritic Score - 75',
        price: '$2.99',
        name: 'Worms World Party',
        description: 'Worms battle each other across a destructible landscape with the objective being to become the sole surviving team. The games are noted for their cartoony animation and extensive use of surrealism and slapstick humour.',
        image: './img/worms-world-party.webp'
    },
    {
        score: 'Metacritic Score - 86',
        price: '$49.99',
        name: 'Vandal Hearts',
        description: 'Vandal Hearts is a turn-based tactical role-playing video game.Gameplay is carried out through an isometric viewpoint.Battles are carried out on a series of grid maps.',
        image: './img/vandalhearts.webp'
    },
    {
        score: 'Metacritic Score - 79',
        price: '$11.99',
        name: 'Tekken 4',
        description: 'Players choose a character from a lineup and engage in hand-to-hand combat with an opponent. Tekken allows the player to control each of the fighter\'s four limbs independently.',
        image: './img/tekken.jpg'
    },
    {
        score: 'Metacritic Score - 72',
        price: '$129.99',
        name: 'Dragon Ball Z: Budokai Tenkaichi 3',
        description: 'Tenkaichi 3 is a 3D fighting game. It features 98 characters in 161 forms, the largest roster in a fighting game at the time.',
        image: './img/dbz_tenkaichi_3.webp'
    },
    {
        score: 'Metacritic Score - 83',
        price: '$18.85',
        name: 'Tony Hawk Underground 2',
        description: 'Tony Hawk Underground 2 puts the player in control of a famous skateboarder. The goal of the game is to perform tricks and combinations thereof in an effort to increase the player\'s score',
        image: './img/thug-2.webp'
    },
    {
        score: 'Metacritic Score - 94',
        price: '$14.97',
        name: 'Call of Duty 4',
        description: 'Call of Duty 4: Modern Warfare is a first-person shooter video game. The game breaks away from the World War II setting of previous entries and is instead set in modern times.',
        image: './img/cod-4.jpg'
    },
    {
        score: 'Metacritic Score - 85',
        price: '$9.95',
        name: 'Guitar Hero',
        description: 'Guitar Hero III: Legends of Rock is a rhythm game developed by Neversoft and published by Activision. It is the third main installment and the fourth overall installment in the Guitar Hero series',
        image: './img/gh3.jpg'
    },
    {
        score: 'Metacritic Score - 89',
        price: '$59.95',
        name: 'Dark Souls',
        description: 'Dark Souls is a dark fantasy action role-playing game. It began with the release of Dark Souls and has seen two sequels, Dark Souls II and Dark Souls III.',
        image: './img/ds1.webp'
    },
    {
        score: 'Metacritic Score - 92',
        price: '$59.99',
        name: 'Mario Kart 8',
        description: 'Mario Kart 8 is a kart racing game; players control characters from the Mario universe to race in go-karts around a course. They may hinder their opponents or improve their performance using power-ups found in item boxes throughout the course.',
        image: './img/mk8.webp'
    },
    {
        score: 'Metacritic Score - 88',
        price: '$14.99',
        name: 'The Binding of Isaac',
        description: 'The Binding of Isaac is a top-down dungeon crawler game, presented using two-dimensional sprites, in which the player controls Isaac or other unlockable characters as they explore the dungeons located in Isaac\'s basement.',
        image: './img/tboi.webp'
    },
    {
        score: 'Metacritic Score - 97',
        price: '$59.99',
        name: 'The Ledgend of Zelda BOTW',
        description: 'The Legend of Zelda: Breath of the Wild is a action-adventure game. Set at the end of the Zelda timeline, the player controls an amnesiac Link as he sets out to save Princess Zelda and prevent Calamity Ganon from destroying the world.',
        image: './img/zelda.jpg'
    },
    {
        score: 'Metacritic Score - 97',
        price: '$59.99',
        name: 'Mario Odyssey',
        description: 'Super Mario Odyssey is a platform game in which players control Mario as he travels across many different worlds, known as "Kingdoms" within the game, on the hat-shaped ship Odyssey, to rescue Princess Peach from Bowser, who plans to forcibly marry her.',
        image: './img/mario-od.jpg'
    },
    {
        score: 'Metacritic Score - 86',
        price: '$59.99',
        name: 'Luigi\'s mansion 3',
        description: 'Luigi\'s Mansion 3 is a action-adventure video game. It is the third installment in the Luigi\'s Mansion series following Luigi\'s Mansion: Dark Moon.',
        image: './img/luigis-mansion.webp'
    },
    {
        score: 'Metacritic Score - 88',
        price: '$54.95',
        name: 'It Takes Two',
        description: 'Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Trapped in a fantastical world, they\'re reluctantly challenged with saving their fractured relationship by the suave love guru Dr. Hakim.',
        image: './img/ittakestow.webp'
    },
    {
        score: 'Metacritic Score - 80',
        price: '$104.95',
        name: 'Lies of P',
        description: 'A dark fantasy action game inspired by the classic story of Pinocchio. This macabre Soulslike draws its inspiration from an unlikely source: The Adventures of Pinocchio. In this grim reimagining of Carlo Collodi\'s treasured tale, Pinocchio is trying to find the mysterious Mr.',
        image: './img/lies-of-p.jpg'
    },
    {
        score: 'Metacritic Score - 90',
        price: '$35.17',
        name: 'Balatro',
        description: 'The poker roguelike. Balatro is a hypnotically satisfying deckbuilder where you play illegal poker hands, discover game-changing jokers, and trigger adrenaline-pumping, outrageous combos.',
        image: './img/balatro.jpg'
    },
]

// const results = document.getElementById('results');

// for (let i = 0; i < products.length; i++) {
//     results.innerHTML += `
//         <div class="card">
//             <img src="${products[i].image}" alt="">
//             <div class="card-details">
//                 <h3>${products[i].name}</h3>
//                 <h4>${products[i].metacriticScore}</h4>
//                 <h4>${products[i].price}</h4>
//                 <p>${products[i].description}</p>
//             </div>
//         </div>
//     `
// }
// -------- HTML ELEMENTS & SETTING AS GLOBAL SCOPED --------

// Get the results div:
const results = document.getElementById('results');
// Get the sort button:
const sortByNameButton = document.getElementById('nameButton');

// -------- POPULATE CARDS & Initial Population --------

// Populate cards - no sorting just populatin
function populateCards(array) {
    // clear out any results first:
    results.innerHTML = '';
    // Loop over the students and create a crad for each student - for loop
    for (let i = 0; i < array.length; i++) {
        // then populate:
        results.innerHTML += `
            <div class="card">
                <img src="${array[i].image}" alt="">
                <div class="card-details">
                    <h3>${array[i].name}</h3>
                    <h4>${array[i].score}</h4>
                    <h4>${array[i].price}</h4>
                    <p>${array[i].description}</p>
                </div>
            </div>
        `
    }
}

populateCards(products);

// ------- SORTING BY NAME ---------


// Sort by Name
function sortbyName() {
    // Compare function to compare strings:
    function compareByName(a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    }
    // new variable for the sorted array
    const sortedNames = products.sort(compareByName);
    console.log(sortedNames);
    // Populate method - pass in sortedNames array
    populateCards(sortedNames);
}

// Onclick - sort the array and repopulate the cards:
sortByNameButton.addEventListener('click', function () {
    console.log('sort button working');
    sortbyName();
});


// ---------- SORT BY PRICE HIGH --------

// Get the sort button:
const sortByPriceHigh = document.getElementById('priceHigh');

// Sort by Price
function sortbyPriceHigh() {
    // Compare function to compare strings:
    function compareByPriceHigh(a, b) {
        const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1,-1)) : 0;
        const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1,-1)) : 0;
        return bPrice - aPrice;
    }
    // new variable for the sorted array
    const sortedPrices = products.sort(compareByPriceHigh);
    console.log(sortedPrices);
    // Populate method - pass in sortedNames array
    populateCards(sortedPrices);
}

// Onclick - sort the array and repopulate the cards:
sortByPriceHigh.addEventListener('click', function () {
    console.log('sort by price button working');
    sortbyPriceHigh();
});

// ---------- SORT BY PRICE LOW --------

// Get the sort button:
const sortByPriceLow = document.getElementById('priceLow');

// Sort by Price
function sortbyPriceLow() {
    // Compare function to compare strings:
    function compareByPriceLow(a, b) {
        const aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1,-1)) : 0;
        const bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1,-1)) : 0;
        return aPrice - bPrice;
    }
    // new variable for the sorted array
    const sortedPrices = products.sort(compareByPriceLow);
    console.log(sortedPrices);
    // Populate method - pass in sortedNames array
    populateCards(sortedPrices);
}

// Onclick - sort the array and repopulate the cards:
sortByPriceLow.addEventListener('click', function () {
    console.log('sort by price button working');
    sortbyPriceLow();
});




// ---------- SORT BY SCORE HIGH --------


// Get the sort button:
const sortByScoreHigh = document.getElementById('scoreHigh');


// Sort by Score High function
function sortbyScoreHigh() {
    // Compare function to compare scores:
    function compareByScoreHigh(a, b) {
        // Extracting the numerical score values from the strings
        const aScore = parseFloat(a.score.replace('Metacritic Score - ', ''));
        const bScore = parseFloat(b.score.replace('Metacritic Score - ', ''));
        
        // Sort in descending order (bScore - aScore)
        return bScore - aScore;
    }

    // Sort the products array using the compare function
    const sortedScores = products.sort(compareByScoreHigh);
    console.log(sortedScores);

    // Populate method - pass in the sorted array
    populateCards(sortedScores);
}

// Add event listener for the sort by score button
sortByScoreHigh.addEventListener('click', function () {
    console.log('sort by score button working');
    sortbyScoreHigh();
});

// ---------- SORT BY SCORE HIGH --------


// Get the sort button:
const sortByScoreLow = document.getElementById('scoreLow');


// Sort by Score High function
function sortbyScoreLow() {
    // Compare function to compare scores:
    function compareByScoreLow(a, b) {
        // Extracting the numerical score values from the strings
        const aScore = parseFloat(a.score.replace('Metacritic Score - ', ''));
        const bScore = parseFloat(b.score.replace('Metacritic Score - ', ''));
        
        // Sort in descending order (bScore - aScore)
        return aScore - bScore;
    }

    // Sort the products array using the compare function
    const sortedScores = products.sort(compareByScoreLow);
    console.log(sortedScores);

    // Populate method - pass in the sorted array
    populateCards(sortedScores);
}

// Add event listener for the sort by score button
sortByScoreLow.addEventListener('click', function () {
    console.log('sort by score button working');
    sortbyScoreLow();
});


