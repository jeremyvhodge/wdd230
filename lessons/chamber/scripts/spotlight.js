async function getCompanyData() {
    // This is an asynchronous function that retrieves data from a JSON file.

    // The await keyword pauses the execution of the function until the promise returned by fetch resolves.
    const response = await fetch('./scripts/json/data.json');

    // the response is converted to JSON format using the .json() method.
    const arrayWithTheCompanies = await response.json();

    // The JSON data is now available as an array of objects in the arrayWithTheCompanies variable.

    // Call the randomSpotlight function and pass in the array of company data as an argument.
    randomSpotlight(arrayWithTheCompanies.companies);
}

function randomSpotlight(jsonData) {
    // This function takes the JSON data as input.

    // The jsonData array is filtered to create two separate arrays: goldCompanies and silverCompanies.
    // The filter method creates a new array containing elements that pass the provided test function.


    const goldCompanies = jsonData.filter(function(company) {
        return company.membershipLevel === "gold";
    });

    // The test function checks if the membershipLevel property of each company object is equal to "silver".
    // If it is, the company object is included in the silverCompanies array.
    const silverCompanies = jsonData.filter(function(company) {
        return company.membershipLevel === "silver";
    });

    // Randomly select a gold company and a silver company.

    
    const randomGoldCompany = goldCompanies[Math.floor(Math.random() * goldCompanies.length)];

    // Generate a random index within the bounds of the silverCompanies array.
    const randomSilverCompany = silverCompanies[Math.floor(Math.random() * silverCompanies.length)];

    console.log(randomGoldCompany);
    console.log(randomSilverCompany);
    
    document.getElementById("randomSpot1").textContent = randomGoldCompany.name;
    document.getElementById("randomSpot1img").src = randomGoldCompany.icon;
    document.getElementById("randomSpot1p").innerHTML = "Address: " + randomGoldCompany.address + "<br>Phone: " + randomGoldCompany.phone + "<br>Website: <a href='" + randomGoldCompany.website + "'>" + randomGoldCompany.website + "</a>";
    
    
    document.getElementById("randomSpot2").textContent = randomSilverCompany.name;;
    document.getElementById("radomSpot2img").src = randomSilverCompany.icon;
    document.getElementById("randomSpot2p").innerHTML = "Address: " + randomSilverCompany.address + "<br>Phone: " + randomSilverCompany.phone + "<br>Website: <a href='" + randomSilverCompany.website + "'>" + randomSilverCompany.website + "</a>";
    
}

getCompanyData();
