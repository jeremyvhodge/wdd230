async function getCompanyData() {
    // This is an asynchronous function that retrieves data from a JSON file.
    // It is marked as async to allow the use of the await keyword.

    // The fetch function is used to make an HTTP request to the specified JSON file.
    // The URL './scripts/json/data.json' represents the relative path to the JSON file.
    // The await keyword pauses the execution of the function until the promise returned by fetch resolves.
    const response = await fetch('./scripts/json/data.json');

    // Once the promise from the fetch request is resolved,
    // the response is converted to JSON format using the .json() method.
    // Again, the await keyword is used to wait for the promise to resolve.
    const arrayWithTheCompanies = await response.json();

    // The JSON data is now available as an array of objects in the arrayWithTheCompanies variable.

    // Now we call the randomSpotlight function and pass in the array of company data as an argument.
    randomSpotlight(arrayWithTheCompanies.companies);
}

function randomSpotlight(jsonData) {
    // This function takes the JSON data as input.

    // The jsonData array is filtered to create two separate arrays: goldCompanies and silverCompanies.
    // The filter method creates a new array containing elements that pass the provided test function.

    // The test function checks if the membershipLevel property of each company object is equal to "gold".
    // If it is, the company object is included in the goldCompanies array.
    const goldCompanies = jsonData.filter(function(company) {
        return company.membershipLevel === "gold";
    });

    // Similarly, the test function checks if the membershipLevel property of each company object is equal to "silver".
    // If it is, the company object is included in the silverCompanies array.
    const silverCompanies = jsonData.filter(function(company) {
        return company.membershipLevel === "silver";
    });

    // Now we randomly select a gold company and a silver company.

    // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
    // We multiply it by the length of the goldCompanies array to get a random index within its bounds.
    // Math.floor() rounds down the result to the nearest whole number, ensuring it's a valid index.
    const randomGoldCompany = goldCompanies[Math.floor(Math.random() * goldCompanies.length)];

    // Similarly, we generate a random index within the bounds of the silverCompanies array.
    const randomSilverCompany = silverCompanies[Math.floor(Math.random() * silverCompanies.length)];

    // Finally, we log the randomly selected gold and silver companies to the console.
    console.log(randomGoldCompany);
    console.log(randomSilverCompany);
    
    document.getElementById("randomSpot1").textContent = randomGoldCompany.name;
    document.getElementById("randomSpot1img").src = randomGoldCompany.icon;
    document.getElementById("randomSpot1p").innerHTML = "Address: " + randomGoldCompany.address + "<br>Phone: " + randomGoldCompany.phone + "<br>Website: <a href='" + randomGoldCompany.website + "'>" + randomGoldCompany.website + "</a>";
    
    
    document.getElementById("randomSpot2").textContent = randomSilverCompany.name;;
    document.getElementById("radomSpot2img").src = randomSilverCompany.icon;
    document.getElementById("randomSpot2p").innerHTML = "Address: " + randomSilverCompany.address + "<br>Phone: " + randomSilverCompany.phone + "<br>Website: <a href='" + randomSilverCompany.website + "'>" + randomSilverCompany.website + "</a>";
    


   // <p id="randomSpot2p"> Address: 123 Main Street 
   // Phone: 2084567890 
   // Website: <a href='www.abccompany.com'> abccompany.com </a> </p>
}

// The getCompanyData function is called at the end to initiate the process of fetching the data and displaying the random companies.
getCompanyData();
