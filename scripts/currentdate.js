const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = document.lastModified;

const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = currentYear;