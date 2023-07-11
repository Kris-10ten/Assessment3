function getRandomRestaurant() {
	let restaurants = [
	  "Firebirds",
	  "Vivace",
	  "CO",
	  "Mason's Famous Lobster Rolls"
	];
  
	let randomIndex = Math.floor(Math.random() * restaurants.length);
	let randomRestaurant = restaurants[randomIndex];
  
	alert(`I recommend trying ${randomRestaurant}!`);
  }
  
  let randomRestaurantBtn = document.getElementById("random-restaurant-btn");
  randomRestaurantBtn.addEventListener("click", getRandomRestaurant);
