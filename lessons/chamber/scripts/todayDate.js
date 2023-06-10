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

    // Initialize the constiable to store the number of days since the last visit
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

    try {
        document.getElementById("daysSince").textContent = daysSinceVisit;
    }
    catch(err) {
        console.log("daysSinceVisit not found");
        }

        }
else {
    // If local storage is not supported, display a message indicating so
    document.getElementById("daysSinceVisit").textContent = "Local storage is not supported";
}

// This is for the join page hidden date and time that the form was loaded by the user.
// This function sets the load time on a specific element in the HTML document
function setLoadTime() {
    // Extract the year from the current date
    const year = currentDate.getFullYear();

    // Extract the month from the current date.
    // Note: getMonth() returns a zero-based index, so we add 1 to get the actual month number
    const month = currentDate.getMonth() + 1;

    // Extract the day of the month from the current date
    const day = currentDate.getDate();

    // Extract the hours from the current date
    const hours = currentDate.getHours();

    // Extract the minutes from the current date
    const minutes = currentDate.getMinutes();

    // Extract the seconds from the current date
    const seconds = currentDate.getSeconds();

    // Construct the load time string in the format 'YYYY-MM-DD HH:MM:SS'
    const loadTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

    // Set the value of the element with the ID 'load-time-input' to the load time string
    document.getElementById('load-time-input').value = loadTime;
}

  
  setLoadTime();