const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

try {
  const currentDateElement = document.getElementById('currentdate');
  if (currentDateElement) {
    currentDateElement.textContent = document.lastModified;
  } else {
    throw new Error('Element with ID "currentdate" not found.');
  }

  const currentYearElement = document.getElementById('copyright');
  if (currentYearElement) {
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
  } else {
    throw new Error('Element with ID "copyright" not found.');
  }
} catch (error) {
  console.log('An error occurred:', error);
}
