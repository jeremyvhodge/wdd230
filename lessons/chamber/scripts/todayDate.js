// Get the current date and time (used for both the date at the top of the page and the days since last visit)
const currentDate = new Date();

// Date at the top of the page
// Define options for formatting the date
const dateOptions = {weekday:'long', year:'numeric', month:'long', day: 'numeric'};

// Format the current date according to the options
const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);

// Display the formatted date on the element with the id 'todayDate'
document.getElementById('todayDate').textContent = formattedDate;


//Days since last visit
// Check if the browser supports the Web Storage API
if (typeof(Storage) !== "undefined") {
    // Retrieve the last visit date from local storage
    let lastVisit = localStorage.getItem("lastVisit");

    // Initialize the variable to store the number of days since the last visit
    let daysSinceVisit = 0;

    // Check if there is a previous visit date stored
    if (lastVisit) {
        // Convert the stored date string into a Date object
        lastVisit = new Date(lastVisit);

        // Calculate the time difference between the current date and the last visit date
        const timeDiff = currentDate.getTime() - lastVisit.getTime();

        // Calculate the number of days since the last visit
        daysSinceVisit = Math.ceil(timeDiff / (1000 * 3600 * 24));
    }

    // Store the current visit date in local storage
    localStorage.setItem("lastVisit", currentDate);

    // Display the number of days since the last visit on the element with the id 'daysSince'
    document.getElementById("daysSince").textContent = daysSinceVisit;
} else {
    // If local storage is not supported, display a message indicating so
    document.getElementById("daysSinceVisit").textContent = "Local storage is not supported";
}
