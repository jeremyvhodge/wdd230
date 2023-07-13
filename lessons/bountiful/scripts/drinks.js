function displaydrinks() {
    // Get the counter from local storage
    var drinks = localStorage.getItem('numberOfDrinksOrdered');
  
    // If the counter exists, display it, otherwise display 0
    if (drinks !== null) {
      document.getElementById('display-number-of-drinks').innerText = drinks;
    } else {
      document.getElementById('display-number-of-drinks').innerText = 0;
    }
  }
displaydrinks();