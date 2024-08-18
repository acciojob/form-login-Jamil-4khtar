function getFormvalue() {
    //Write your code here
	// Select the form
const form = document.querySelector('form');

// Add submit event listener
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Access form data
  const firstName = event.target.elements.firstName.value;
  const lastName = event.target.elements.lastName.value;

  // Display the data
  alert(firstName + ' ' + lastName);
});

}
