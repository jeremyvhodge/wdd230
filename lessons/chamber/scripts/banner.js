// Get the banner element
const banner = document.getElementById('banner');
// Get the current day of the week (0-6, where Sunday is 0 and Saturday is 6)
const currentDay = new Date().getDay();
// Check if the current day is Tuesday (2) or Monday (1)
if (currentDay == 1 || currentDay == 2) {
    banner.style.display = 'block';
}
