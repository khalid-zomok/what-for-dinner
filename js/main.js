/**
 * @file main.js
 * @description Core logic for the Egyptian Recipe Display application.
 * @author [khaled zomok]
 * @contact [zomokremix@gmail.com]
 * @phone +20 109 787 3807
 * @version 1.0.0
 * @date 2025-11-28
 */

// =================================================================
// 1. DATA ./ the real Data u can add or remove as u like 
// =================================================================
const RECIPES = [
    // 1. Koshari (Egypt's National Dish)
    {
        name: "Koshari (Egyptian National Dish)",
        img: "./images/1.jpg",
        rating: 4.9,
        description: "A comforting mix of rice, macaroni, and lentils topped with a spicy tomato sauce, chickpeas, and crispy fried onions.",
        reviews: 2500,
        prepTime: 30,
        cookTime: 45,
        servings: 6,
        difficulty: "Medium",
        nationality: "Egyptian",
        ingredients: [
            "1 cup short-grain rice",
            "1 cup brown lentils",
            "1 cup small elbow macaroni",
            "1 large can crushed tomatoes",
            "1/2 cup vinegar",
            "4 cloves garlic, minced",
            "2 large onions, thinly sliced (for frying)",
            "1 can chickpeas",
        ],
        instruction: [
            "Cook rice, lentils, and macaroni separately until tender.",
            "Fry the thin onion slices until dark brown and crispy; set aside.",
            "Sauté garlic, add crushed tomatoes, and simmer to create the sauce. Season with salt and cumin.",
            "Mix vinegar, minced garlic, and water for the spicy 'Dakka' topping.",
            "To serve, layer rice, lentils, and macaroni, then top with sauce, chickpeas, and crispy onions.",
        ],
        nutrition: {
            calories: 400,
            protein: "15g",
            carbs: "70g",
            fat: "8g",
            fiber: "12g",
            sodium: "650mg",
        },
        chef_tips: [
            "Use a mix of both **white and brown vinegar** in the Dakka for a balanced tang.",
            "The secret to crispy onions is to toss them with a spoonful of **flour** before frying.",
            "Serve the **tomato sauce hot** and the 'Dakka' (spicy garlic vinegar) on the side.",
            "Don't rinse the rice after cooking; the starch helps bind the layers slightly.",
            "Add a pinch of **cayenne pepper or crushed chili flakes** to the tomato sauce for authentic heat."
        ]
    },
    // 2. Ta'ameya (Egyptian Falafel)
    {
        name: "Ta'ameya (Egyptian Fava Bean Falafel)",
        img: "./images/2.jpg",
        rating: 4.7,
        description: "Fried patties made from crushed dried fava beans (not chickpeas), mixed with fresh herbs and spices, typically served for breakfast.",
        reviews: 1800,
        prepTime: 120, // Requires soaking time
        cookTime: 15,
        servings: 4,
        difficulty: "Medium",
        nationality: "Egyptian",
        ingredients: [
            "1 cup dried split fava beans (soaked overnight)",
            "1/2 bunch cilantro",
            "1/2 bunch parsley",
            "1 onion, roughly chopped",
            "2 cloves garlic",
            "1 tsp ground coriander",
            "1/2 tsp cumin",
            "Sesame seeds (optional)",
        ],
        instruction: [
            "Soak fava beans overnight. Drain well.",
            "Grind the soaked beans, herbs, onion, and garlic until a coarse paste forms.",
            "Mix in the spices, salt, and pepper.",
            "Form into small flat patties or balls.",
            "Fry in hot oil until deeply golden brown and crispy.",
            "Serve immediately inside pita bread with tahini.",
        ],
        nutrition: {
            calories: 320,
            protein: "18g",
            carbs: "35g",
            fat: "14g",
            fiber: "10g",
            sodium: "300mg",
        },
        chef_tips: [
            "**Never use canned or cooked beans**; the fava beans must be dried and only soaked for the right texture.",
            "If the mix is too wet, add a tablespoon of flour or chickpea flour (besan) to help it bind.",
            "For extra flavor, coat the patties with **sesame seeds** before frying.",
            "The mixture should be ground until it's **slightly coarse**, not completely smooth like hummus.",
            "Use high-quality oil and make sure it is **very hot** to prevent the ta'ameya from absorbing too much fat."
        ]
    },
    // 3. Molokhiya (Green Soup)
    {
        name: "Molokhiya (Jute Mallow Soup)",
        img: "./images/3.jpg",
        rating: 4.6,
        description: "A thick, green, viscous soup made from finely chopped jute mallow leaves, cooked in meat or chicken broth, often served with rice.",
        reviews: 1500,
        prepTime: 20,
        cookTime: 30,
        servings: 4,
        difficulty: "Medium",
        nationality: "Egyptian",
        ingredients: [
            "1 lb fresh or frozen Molokhiya leaves, chopped",
            "4 cups chicken or beef broth",
            "6 cloves garlic, crushed",
            "2 tbsp butter or oil",
            "1 tbsp ground coriander",
            "1/2 cup chopped cooked chicken or rabbit (optional)",
        ],
        instruction: [
            "Bring the broth to a boil, then add the chopped Molokhiya leaves and stir constantly.",
            "Simmer for about 10 minutes; do not cover or let it boil vigorously.",
            "In a separate pan, melt butter/oil and fry the crushed garlic and coriander (this is the 'Ta'sha').",
            "When the garlic is golden, immediately pour the Ta'sha into the Molokhiya soup (this creates the famous sizzling sound).",
            "Serve immediately with rice and a squeeze of lemon.",
        ],
        nutrition: {
            calories: 180,
            protein: "10g",
            carbs: "15g",
            fat: "9g",
            fiber: "5g",
            sodium: "500mg",
        },
        chef_tips: [
            "The **'Ta'sha' (garlic/coriander mix) must be fried quickly** to a golden color, not brown, for the perfect aroma.",
            "Do not allow the Molokhiya to **boil vigorously** or it will separate from the liquid, losing its thickness.",
            "A traditional Egyptian practice is to inhale sharply when the 'Ta'sha' hits the soup—it's a sign of a good cook!",
            "Use **freshly made bone broth** (chicken or rabbit is traditional) for the most authentic flavor base.",
            "Serve with Egyptian rice (rice cooked with vermicelli) for the classic pairing."
        ]
    },
    // 4. Fattah (Meat, Rice, Bread Dish)
    {
        name: "Fattah (Meat, Rice, Bread Casserole)",
        img: "./images/4.jpg",
        rating: 4.8,
        description: "A festive dish of layers of crispy bread, white rice, rich meat broth, and a tangy tomato-vinegar sauce, usually served on Eid al-Adha.",
        reviews: 1200,
        prepTime: 20,
        cookTime: 70,
        servings: 8,
        difficulty: "Medium",
        nationality: "Egyptian",
        ingredients: [
            "1 lb stewing lamb or beef",
            "3 cups Egyptian rice (vermicelli rice)",
            "4 pitas, cut and toasted or fried",
            "4 cups meat broth",
            "1 can crushed tomatoes",
            "1/4 cup vinegar",
            "5 cloves garlic, crushed",
            "3 tbsp butter or ghee",
        ],
        instruction: [
            "Boil the meat until tender, reserving the broth.",
            "Cook the rice (mixed with vermicelli) separately.",
            "Sauté garlic in butter, add vinegar, then add tomatoes and simmer for sauce.",
            "Lightly moisten the toasted bread with a little broth.",
            "Layer the platter: soaked bread, then rice, then meat chunks, then tomato-vinegar sauce.",
        ],
        nutrition: {
            calories: 550,
            protein: "30g",
            carbs: "60g",
            fat: "20g",
            fiber: "4g",
            sodium: "700mg",
        },
        chef_tips: [
            "For the best flavor, use **ghee (clarified butter)** instead of regular butter to sauté the garlic for the sauce.",
            "Make sure the **bread remains slightly crunchy** and is not completely soggy; only sprinkle the broth, don't drench it.",
            "The tomato sauce needs a **strong vinegar punch** to cut through the richness of the rice and meat.",
            "Use a high-quality cut of **lamb or beef** for the broth, as it is the foundation of the dish's flavor.",
            "Add a spoonful of the sauce to the **rice water** when cooking for a subtle, seasoned flavor."
        ]
    },
    // 5. Basbousa (Semolina Cake)
    {
        name: "Basbousa (Sweet Semolina Cake)",
        img: "./images/5.jpg",
        rating: 4.7,
        description: "A tender, sweet semolina cake soaked in a fragrant rosewater or orange blossom syrup, typically cut into diamond shapes.",
        reviews: 1600,
        prepTime: 20,
        cookTime: 35,
        servings: 12,
        difficulty: "Easy",
        nationality: "Egyptian/Middle Eastern",
        ingredients: [
            "2 cups coarse semolina flour",
            "1 cup unsweetened yogurt",
            "1/2 cup melted butter or ghee",
            "1/2 cup sugar",
            "1 tsp baking powder",
            "1 cup water (for syrup)",
            "1.5 cups sugar (for syrup)",
            "1 tbsp rosewater or orange blossom water",
        ],
        instruction: [
            "Mix semolina, yogurt, melted butter, sugar, and baking powder. Do not overmix.",
            "Press the batter into a greased baking pan and cut into diamond shapes before baking.",
            "Bake at 350°F (175°C) until golden brown (30-35 mins).",
            "While baking, boil sugar and water to create a syrup; stir in rosewater after cooling slightly.",
            "Pour the warm syrup evenly over the hot cake immediately after removing it from the oven.",
            "Let cool completely before serving.",
        ],
        nutrition: {
            calories: 280,
            protein: "4g",
            carbs: "50g",
            fat: "8g",
            fiber: "1g",
            sodium: "80mg",
        },
        chef_tips: [
            "**Do not overmix the batter**; mix just until combined to ensure the cake remains tender, not tough.",
            "The **syrup must be warm/cool and the cake must be hot** (or vice versa) so the cake absorbs the syrup properly.",
            "Use full-fat plain **yogurt** for the best moisture and texture.",
            "A single **almond or pine nut** is often pressed into the center of each diamond slice before baking for decoration.",
            "Allow the Basbousa to **rest for several hours or overnight** after soaking for the best texture and flavor absorption."
        ]
    },
    // 6. Ful Medames (Stewed Fava Beans)
    {
        name: "Ful Medames (Stewed Fava Beans)",
        img: "./images/6.jpg",
        rating: 4.5,
        description: "Hearty slow-cooked fava beans seasoned with olive oil, cumin, and lemon juice, a staple Egyptian breakfast dish.",
        reviews: 900,
        prepTime: 10,
        cookTime: 120,
        servings: 4,
        difficulty: "Easy",
        nationality: "Egyptian",
        ingredients: [
            "2 cups dried fava beans (soaked overnight)",
            "2 cloves garlic, mashed",
            "1/4 cup olive oil",
            "1 lemon, juiced",
            "1 tsp cumin",
            "Salt and chili flakes to taste",
            "Chopped parsley for garnish",
        ],
        instruction: [
            "Soak the fava beans overnight. Drain and rinse.",
            "Place beans in a pot with fresh water, bring to a boil, then simmer gently for 2 hours or until very tender.",
            "Mash some of the beans to thicken the consistency.",
            "Stir in garlic, olive oil, lemon juice, cumin, salt, and chili.",
            "Serve hot, drizzled with more olive oil and garnished with parsley.",
        ],
        nutrition: {
            calories: 350,
            protein: "20g",
            carbs: "45g",
            fat: "12g",
            fiber: "15g",
            sodium: "250mg",
        },
        chef_tips: [
            "The beans should be cooked so they are **fall-apart tender**; use a slow cooker if possible for the best creamy consistency.",
            "For a creamier texture, add a pinch of **baking soda** to the soaking water.",
            "Traditionally, Ful is cooked in a special earthen pot called a **'Qidra'**.",
            "Serve with finely **diced tomato and onion** on the side for added freshness and crunch.",
            "A good Ful must be **heavily seasoned with cumin** to aid digestion and enhance flavor."
        ]
    },
    // 7. Mahshi (Stuffed Vegetables)
    {
        name: "Mahshi (Stuffed Vegetables)",
        img: "./images/7.jpg",
        rating: 4.7,
        description: "Assorted vegetables (zucchini, eggplant, bell peppers) or cabbage leaves stuffed with a spiced rice and herb mixture, slow-cooked in tomato broth.",
        reviews: 1400,
        prepTime: 60,
        cookTime: 90,
        servings: 6,
        difficulty: "Hard",
        nationality: "Egyptian",
        ingredients: [
            "6 zucchini, hollowed",
            "6 bell peppers, cored",
            "1 cup short-grain rice, washed",
            "1/2 cup chopped dill, parsley, and cilantro mix",
            "1 can tomato paste",
            "1 tsp dried mint",
            "3 cups meat or chicken broth",
            "2 tbsp oil or ghee",
        ],
        instruction: [
            "Mix the washed rice with herbs, spices, tomato paste, and oil to create the stuffing.",
            "Stuff the hollowed vegetables or rolled cabbage/grape leaves about 3/4 full.",
            "Arrange tightly in a large pot.",
            "Pour hot broth over the mahshi until it reaches just below the top layer.",
            "Cover and simmer on low heat for 60-90 minutes until the rice is cooked.",
        ],
        nutrition: {
            calories: 300,
            protein: "8g",
            carbs: "45g",
            fat: "10g",
            fiber: "6g",
            sodium: "600mg",
        },
        chef_tips: [
            "The **stuffed vegetables must be packed tightly** in the pot to prevent them from unraveling or floating.",
            "**Never overfill the vegetables**; the rice needs room to expand as it cooks, or it will be hard.",
            "For added depth, line the bottom of the pot with **tomato slices or lamb bones**.",
            "A tiny sprinkle of **dried mint** is crucial in the stuffing for that distinct Egyptian aroma.",
            "Before cooking, place a heavy **plate or lid inside the pot** on top of the mahshi to weigh them down and keep them submerged."
        ]
    },
    // 8. Hawawshi (Egyptian Meat Pie)
    {
        name: "Hawawshi (Egyptian Meat Pie/Sandwich)",
        img: "./images/8.jpg",
        rating: 4.8,
        description: "A seasoned ground beef mixture, often with chili and peppers, stuffed inside a round pita bread and baked until the bread is crispy.",
        reviews: 1100,
        prepTime: 25,
        cookTime: 40,
        servings: 4,
        difficulty: "Easy",
        nationality: "Egyptian",
        ingredients: [
            "1 lb ground beef (20% fat preferred)",
            "1 large onion, finely chopped",
            "1 green bell pepper, minced",
            "1 tomato, seeded and diced",
            "2 tsp Baharat (7-Spice blend)",
            "1/2 tsp chili flakes (optional)",
            "4 large pita breads",
        ],
        instruction: [
            "Mix ground beef, onion, pepper, tomato, and spices thoroughly with your hands.",
            "Cut the pita bread in half to create pockets, or use whole pitas.",
            "Stuff the meat mixture evenly inside the pitas, pressing flat.",
            "Brush the outsides of the pitas with oil or melted ghee.",
            "Bake at 350°F (175°C) until the bread is crispy and the meat is cooked through (about 30-40 minutes).",
        ],
        nutrition: {
            calories: 450,
            protein: "35g",
            carbs: "30g",
            fat: "22g",
            fiber: "4g",
            sodium: "500mg",
        },
        chef_tips: [
            "Use **higher fat ground beef** (20%) for a moister, juicier filling that won't dry out in the oven.",
            "For maximum flavor, use a generous amount of **Baharat (Egyptian 7-Spice blend)** in the meat.",
            "Brushing the bread heavily with **oil or ghee** is essential for achieving a perfect, crispy crust.",
            "If using whole pitas, you can cook them **on a grill or in a cast-iron skillet** for a street-food style char.",
            "The meat should be **spread very thinly** within the pita to ensure it cooks completely before the bread burns."
        ]
    },
    // 9. Roz bi Laban (Rice Pudding)
    {
        name: "Roz bi Laban (Egyptian Rice Pudding)",
        img: "./images/9.jpg",
        rating: 4.8,
        description: "A creamy, lightly sweetened rice pudding flavored with vanilla and often topped with coconut, nuts, and cinnamon.",
        reviews: 1350,
        prepTime: 10,
        cookTime: 45,
        servings: 6,
        difficulty: "Easy",
        nationality: "Egyptian",
        ingredients: [
            "1/2 cup short-grain rice",
            "4 cups full-fat milk",
            "1/2 cup granulated sugar",
            "1/2 tsp vanilla extract",
            "2 tbsp cornstarch (for thickening)",
            "1/4 cup shredded coconut (optional)",
            "Cinnamon and crushed pistachios for garnish",
        ],
        instruction: [
            "Cook rice in water until half-done, then drain.",
            "Add milk and sugar to the rice and bring to a simmer, stirring frequently.",
            "Mix cornstarch with a little cold milk and add to the pot to thicken.",
            "Stir constantly until the mixture thickens to a creamy consistency. Add vanilla.",
            "Pour into small bowls or ramekins and chill in the refrigerator.",
            "Garnish with cinnamon, coconut, or nuts before serving.",
        ],
        nutrition: {
            calories: 320,
            protein: "8g",
            carbs: "50g",
            fat: "10g",
            fiber: "1g",
            sodium: "100mg",
        },
        chef_tips: [
            "Use **Egyptian or short-grain rice**; its high starch content creates the necessary creamy texture.",
            "For a richer flavor, infuse the milk with a few **cardamom pods** while heating.",
            "The pudding must be **chilled completely** (at least 4 hours) for the perfect dessert texture.",
            "If you prefer a pudding with a **skin on top**, place a piece of plastic wrap directly on the surface while it cools.",
            "Try adding a spoonful of **Mastika (gum Arabic)** during simmering for a subtle, classic Middle Eastern flavor."
        ]
    },
    // 10. Konafa (Sweet Cheese Pastry)
    {
        name: "Konafa (Sweet Cheese Pastry)",
        img: "./images/10.jpg",
        rating: 4.9,
        description: "A dessert made of thin, shredded pastry dough (kataifi) layered with creamy cheese, baked until golden, and drenched in sweet syrup.",
        reviews: 2000,
        prepTime: 30,
        cookTime: 45,
        servings: 10,
        difficulty: "Medium",
        nationality: "Egyptian/Levantine",
        ingredients: [
            "1 lb shredded phyllo dough (kataifi/konafa dough)",
            "1 cup melted butter or ghee",
            "1 cup soft, unsalted cheese (e.g., mozzarella or ricotta)",
            "1.5 cups sugar (for syrup)",
            "1 cup water (for syrup)",
            "Lemon juice (for syrup)",
            "Orange food coloring (optional)",
        ],
        instruction: [
            "Toss the konafa dough with melted butter or ghee until fully coated.",
            "Press half of the dough into a round pan to form the base.",
            "Spread the cheese evenly over the base, keeping it away from the edges.",
            "Top with the remaining dough and press down firmly.",
            "Bake until golden brown (35-45 mins).",
            "Drench the hot pastry with warm syrup immediately after removing from oven.",
        ],
        nutrition: {
            calories: 480,
            protein: "10g",
            carbs: "65g",
            fat: "20g",
            fiber: "1g",
            sodium: "120mg",
        },
        chef_tips: [
            "The key to the golden color is using plenty of **melted ghee or butter** and mixing in a drop of **orange food coloring** into the fat.",
            "Use a soft, unsalted cheese (like a low-moisture, unsalted mozzarella or Ricotta) that **melts, but doesn't release water**.",
            "**Press the pastry firmly** into the pan, especially the top layer, to ensure a compact, sliceable cake.",
            "The syrup should be made first and allowed to **cool to warm** before drenching the hot Konafa.",
            "Serve immediately while **the cheese is still soft and stretchy** for the best experience."
        ]
    }
];
// =================================================================

// =================================================================
// 2. DOM ELEMENT CACHE ./ For arrangement '🥹
// =================================================================
const DOM = {
    // Info panel elements
    picture: document.getElementById('meal-picture'),
    name: document.getElementById('meal-name'),
    description: document.getElementById('meal-description'),
    rating: document.getElementById('meal-rating'),
    reviews: document.getElementById('meal-reviews'),
    prepTime: document.getElementById('meal-prep-time'),
    cookTime: document.getElementById('meal-cook-time'),
    servings: document.getElementById('meal-serving-people'),
    difficulty: document.getElementById('meal-difficulty'),
    nationality: document.getElementById('meal-nationality'),
    warning: document.getElementById('warning'),

    // Tab buttons
    buttons: {
        ingredients: document.getElementById('ingredients-button'),
        instructions: document.getElementById('instructions-button'),
        nutrition: document.getElementById('nutrition-button'),
        chefTips: document.getElementById('chef-tips-button'),
    },

    // Tab content containers
    tabs: {
        ingredients: document.getElementById('ingredients'),
        instructions: document.getElementById('instructions'),
        nutrition: document.getElementById('nutrition'),
        chefTips: document.getElementById('chef-tips'),
    },

    // Nutrition elements
    nutrition: {
        calories: document.getElementById('calories'),
        protein: document.getElementById('protein'),
        carbs: document.getElementById('carbohydrates'),
        fat: document.getElementById('fat'),
        fiber: document.getElementById('fiber'),
        sodium: document.getElementById('sodium'),
    },

    // Actions
    refreshButton: document.getElementById('refresh-button'),
};
// =================================================================

// =================================================================
// 3. CORE FUNCTIONS 🙂🙂🙂
// =================================================================

/**
 * Renders the primary details of a specific recipe object to the DOM.
 * @param {Object} mealObject - The recipe data object.
 */
const renderMealDetails = (mealObject) => {
    // Set static fields
    DOM.picture.style.backgroundImage = `url(${mealObject.img})`;
    DOM.rating.textContent = mealObject.rating; // Use textContent for plain text
    DOM.reviews.textContent = `(${mealObject.reviews}) reviews`;
    DOM.prepTime.textContent = `${mealObject.prepTime} min`;
    DOM.cookTime.textContent = `${mealObject.cookTime} min`;
    DOM.servings.textContent = `${mealObject.servings} people`;
    DOM.difficulty.textContent = mealObject.difficulty;
    DOM.nationality.textContent = mealObject.nationality;
    DOM.name.textContent = mealObject.name;
    DOM.description.textContent = mealObject.description;

    // Set nutrition data
    DOM.nutrition.calories.textContent = mealObject.nutrition.calories;
    DOM.nutrition.protein.textContent = mealObject.nutrition.protein;
    DOM.nutrition.carbs.textContent = mealObject.nutrition.carbs;
    DOM.nutrition.fat.textContent = mealObject.nutrition.fat;
    DOM.nutrition.fiber.textContent = mealObject.nutrition.fiber;
    DOM.nutrition.sodium.textContent = mealObject.nutrition.sodium;

    // Check for cooking time warning
    const totalTime = mealObject.prepTime + mealObject.cookTime;
    DOM.warning.classList.toggle("d-none", totalTime < 45);

    // Remove  class from difficulty tabs
    DOM.difficulty.classList.remove(
        'text-success', 'bg-success', 
        'text-warning', 'bg-warning', 
        'text-danger', 'bg-danger'
    );

    // Define the class mapping for the difficulty levels
    const difficultyClasses = {
        'Easy': 'text-success bg-success',
        'Medium': 'text-warning bg-warning',
        'Hard': 'text-danger bg-danger'
    };

    //Add the new classes
    const classesToAdd = difficultyClasses[mealObject.difficulty] || '';
    if (classesToAdd) {
        DOM.difficulty.classList.add(...classesToAdd.split(' '));
    }
};

/**
 * Renders the dynamically generated content (ingredients, instructions, tips)
 * @param {Object} mealObject - The recipe data object.
 */
const renderDynamicContent = (mealObject) => {
    // Render Ingredients (using map for list generation)
    DOM.tabs.ingredients.innerHTML = mealObject.ingredients.map((paragraph, i) => `
        <p class="fw-bolder text-secondary">
        <i class="fa-solid fa-${i + 1} bg-danger rounded-circle p-2 text-white"></i> ${paragraph}</p>`).join('');

    // Render Instructions
    DOM.tabs.instructions.innerHTML = mealObject.instruction.map((paragraph, i) => `
        <p class="fw-bolder text-secondary d-flex gap-3"><i
        class="fa-solid fa-${i + 1} fs-6 bg-danger rounded-4 p-3 text-white"></i><span> ${paragraph}</span></p>`).join('');

    // Render Chef Tips
    DOM.tabs.chefTips.innerHTML = mealObject.chef_tips.map(paragraph => ` 
        <p class="d-flex gap-3 py-3 px-1 bg-warning rounded-3 border-start border-4 border-warning bg-opacity-10"><i
        class="fa-solid fa-circle-check bg-warning bg-opacity-10 rounded-circle d-flex justify-content-center fs-4 align-items-center text-danger"></i><span> ${paragraph}</span></p>`).join('');
};

/**
 * Updates the visibility and active state of the current tab.
 * @param {string} item - The ID suffix of the tab to activate ('ingredients', 'instructions', etc.).
 */
const activateTab = (item) => {
    // Reset all tabs and buttons
    Object.values(DOM.tabs).forEach(tab => tab.classList.add("d-none"));
    Object.values(DOM.buttons).forEach(button => button.classList.remove("active"));

    // Activate the selected tab and button
    if (DOM.tabs[item] && DOM.buttons[item]) {
        DOM.tabs[item].classList.remove("d-none");
        DOM.buttons[item].classList.add("active");
    }
};

/**
 * The main handler for selecting a new random meal.
 */
const refreshMealHandler = () => {
    const numberOfMeal = Math.floor(Math.random() * RECIPES.length);
    const selectedMeal = RECIPES[numberOfMeal];

    renderMealDetails(selectedMeal);
    renderDynamicContent(selectedMeal);
};


// =================================================================
// 4. INITIALIZATION AND EVENT LISTENERS
// =================================================================

/**
 * Sets up all event listeners and initializes the application state.
 */
const initializeApp = () => {
    // 4.1 Tab Activation Listeners (using a simple loop for DRY code)
    Object.keys(DOM.buttons).forEach(key => {
        DOM.buttons[key].addEventListener('click', () => {
            activateTab(key);
        });
    });

    // 4.2 Refresh Button Listener
    DOM.refreshButton.addEventListener('click', refreshMealHandler);

    // 4.3 Initial State Setup
    // Start with a random meal displayed
    refreshMealHandler();
    // Set the initial active tab to ingredients
    activateTab('ingredients');
};

// Execute initialization when the script runs
initializeApp();
