const plantsContainer = document.getElementById("plants");
const addPlantButton = document.getElementById("add-plant");

let globalResources = {
  water: 50,
  light: 50,
  nutrients: 50,
};

// Plant growth stages
const growthStages = ["Seed", "Sprout", "Vegetative", "Flowering", "Harvest"];

// Add a new plant
addPlantButton.addEventListener("click", () => {
  const plant = document.createElement("div");
  plant.classList.add("plant");
  plant.dataset.stage = "seed";
  plant.innerHTML = `
    <img src="seed.png" alt="Seed">
    <p>Growth Stage: <span class="stage">Seed</span></p>
    <button class="water-btn">Water</button>
    <button class="light-btn">Add Light</button>
    <button class="nutrients-btn">Add Nutrients</button>
  `;
  plantsContainer.appendChild(plant);

  plant.querySelector(".water-btn").addEventListener("click", () => waterPlant(plant));
  plant.querySelector(".light-btn").addEventListener("click", () => addLight(plant));
  plant.querySelector(".nutrients-btn").addEventListener("click", () => addNutrients(plant));
});

// Manage resources and grow plant
function waterPlant(plant) {
  if (globalResources.water > 0) {
    globalResources.water -= 5;
    updateGlobalStats();
    growPlant(plant);
  } else {
    alert("Not enough water!");
  }
}

function addLight(plant) {
  if (globalResources.light > 0) {
    globalResources.light -= 5;
    updateGlobalStats();
    growPlant(plant);
  } else {
    alert("Not enough light!");
  }
}

function addNutrients(plant) {
  if (globalResources.nutrients > 0) {
    globalResources.nutrients -= 5;
    updateGlobalStats();
    growPlant(plant);
  } else {
    alert("Not enough nutrients!");
  }
}

function growPlant(plant) {
  const currentStage = growthStages.indexOf(plant.dataset.stage);
  if (currentStage < growthStages.length - 1) {
    plant.dataset.stage = growthStages[currentStage + 1].toLowerCase();
    plant.querySelector(".stage").textContent = growthStages[currentStage + 1];
    plant.querySelector("img").src = `${growthStages[currentStage + 1].toLowerCase()}.png`;
  } else {
    alert("Plant is ready to harvest!");
  }
}

// Update global stats display
function updateGlobalStats() {
  document.getElementById("water").textContent = globalResources.water;
  document.getElementById("light").textContent = globalResources.light;
  document.getElementById("nutrients").textContent = globalResources.nutrients;
}