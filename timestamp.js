// Fetch timestamp and update all timestamp elements
fetch('/timestamp.txt')
  .then(response => response.text())
  .then(data => {
    // Get all elements with class 'timestamp'
    const timestampElements = document.querySelectorAll('.timestamp');
    timestampElements.forEach(element => {
      element.innerText = data;  // Set the timestamp text for all
    });
  })
  .catch(error => {
    console.error('Error fetching timestamp:', error);
  });