const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const stuffFromTheURL = await fetch(url);
  const arrayWithTheProphets = await stuffFromTheURL.json();
  displayProphets(arrayWithTheProphets.prophets);
}

function displayProphets(dataThatWeGetFromTheURL) {
    const cards = document.querySelector('div.cards'); // select the output container element

  dataThatWeGetFromTheURL.forEach((prophetInTheJsonFile) => {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = prophetInTheJsonFile.name + " " + prophetInTheJsonFile.lastname;
    h3.textContent = prophetInTheJsonFile.birthdate;
    p.textContent = 'Place of Birth: ' + prophetInTheJsonFile.birthplace;


    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', prophetInTheJsonFile.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophetInTheJsonFile.name} ${prophetInTheJsonFile.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(portrait);

    cards.appendChild(card);

    // console.log("Name:", prophetInTheJsonFile.name);
    // console.log("Last Name:", prophetInTheJsonFile.lastname);
    // console.log("Birthdate:", prophetInTheJsonFile.birthdate);
    // console.log("Death:", prophetInTheJsonFile.death);
    // console.log("Length of Service:", prophetInTheJsonFile.length);
    // console.log("Order:", prophetInTheJsonFile.order);
    // console.log("Birthplace:", prophetInTheJsonFile.birthplace);
    // console.log("Number of Children:", prophetInTheJsonFile.numofchildren);
    // console.log("Image URL:", prophetInTheJsonFile.imageurl);
    // console.log("---------------------------");

  });
}

getProphetData();
