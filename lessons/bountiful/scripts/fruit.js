fetch('./scripts/fruit.json')
  .then(response => response.json())
  .then(data => {
    const dropdown1 = document.getElementById('fruit1');
    const dropdown2 = document.getElementById('fruit2');
    const dropdown3 = document.getElementById('fruit3');

    data.forEach(fruit => {
      const option = document.createElement('option');
      option.text = fruit.name;
      option.value = fruit.id;

      dropdown1.appendChild(option.cloneNode(true));
      dropdown2.appendChild(option.cloneNode(true));
      dropdown3.appendChild(option.cloneNode(true));
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // get form by its tag name
let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    // prevent the regular form submission
    e.preventDefault();

    // get form data
    let data = new FormData(form);
    
    // load the fruit data from the JSON file
    fetch('./scripts/fruit.json')
        .then(response => response.json())
        .then(fruits => {
            // create an HTML string of the form data
            let output = '<h2>Order Submitted:</h2>';
            for (let [key, value] of data) {
                if (key == 'Fruit') {
                    // get the selected fruit name and its nutritional data
                    let selectedFruit = fruits.find(fruit => fruit.id.toString() === value);
                    if (selectedFruit) {
                        output += `<h3 class="fruit-result"><strong>${key}:</strong> ${selectedFruit.name}</h3>`;
                        for (let [nutrient, amount] of Object.entries(selectedFruit.nutritions)) {
                            output += `<p><strong>${nutrient}:</strong> ${amount}</p>`;
                        }
                    }
                } else {
                    output += `<p><strong>${key}:</strong> ${value}</p>`;
                }
            }

            // display the form data in the 'result' div
            let resultDiv = document.getElementById('result');
            resultDiv.innerHTML = output;

            resultDiv.scrollIntoView({behavior: "smooth"});
        });
});