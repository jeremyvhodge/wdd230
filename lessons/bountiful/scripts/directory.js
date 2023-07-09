async function getCompanyData() {
  // Returns a promise that needs to be resolved in order to access the data. 
  const response = await fetch('./scripts/json/data.json');
  // Return in JSON format.
  const arrayWithTheCompanies = await response.json();
  // calling the function
  displayCompanies(arrayWithTheCompanies.companies);
}



function displayCompanies(dataThatWeGetFromTheURL) {
    const cards = document.querySelector('div.cards'); // select the output container element

  dataThatWeGetFromTheURL.forEach((companyInTheJsonFile) => {
  
    let card = document.createElement('div');
    card.classList.add('card');
    
    
    let name = document.createElement('div');
    name.classList.add('card-name');
    
    let address = document.createElement('div');
    address.classList.add('card-address');
    
    let phone = document.createElement('div');
    phone.classList.add('card-phone');

    let website = document.createElement('div');
    website.classList.add('card-website');

    let icon = document.createElement('img');
    icon.classList.add('card-icon');

    let membership = document.createElement('div');
    membership.classList.add('card-membership');

// sends JSON content to the html
name.textContent = companyInTheJsonFile.name;
address.textContent = companyInTheJsonFile.address;
phone.textContent = companyInTheJsonFile.phone;
website.textContent = companyInTheJsonFile.website;
membership.textContent = companyInTheJsonFile.membership;

// handling the image stuff

    icon.setAttribute('src', companyInTheJsonFile.icon);
    icon.setAttribute('alt', `icon of ${companyInTheJsonFile.name}`);
    icon.setAttribute('loading', 'lazy');

// Append the elements into a div named card
card.appendChild(icon);
card.appendChild(name)
card.appendChild(address);
card.appendChild(phone);
card.appendChild(website);

card.appendChild(membership);

cards.appendChild(card);



    // console.log("name:", companyInTheJsonFile.name);
    // console.log("address:", companyInTheJsonFile.address);
    // console.log("phone:", companyInTheJsonFile.phone);
    // console.log("website:", companyInTheJsonFile.website);
    // console.log("icon:", companyInTheJsonFile.icon);
    // console.log("membershipLevel:", companyInTheJsonFile.membershipLevel);
    // console.log("---------------------------");

  });
}

getCompanyData();

// grid view and list view button code
document.addEventListener('DOMContentLoaded', function() {
  const panelButton = document.getElementById('panel');
  const listButton = document.getElementById('list');
  const cardsContainer = document.querySelector('.cards');

  panelButton.addEventListener('click', function() {
    cardsContainer.classList.remove('cards-list');
    cardsContainer.classList.add('cards-grid');
  });

  listButton.addEventListener('click', function() {
    cardsContainer.classList.remove('cards-grid');
    cardsContainer.classList.add('cards-list');
  });
});


