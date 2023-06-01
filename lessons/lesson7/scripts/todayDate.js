const currentDate = new Date();
const dateOptions = {weekday:'long', year:'numeric', month:'long', day: 'numeric'};
const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
document.getElementById('todayDate').textContent = formattedDate;