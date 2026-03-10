// JavaScript code for form validation

function validateForm(event) {

  // Retrieve the input field value
  const input = document.getElementById("inputField");
  const value = input.value;
  
  // Regular expression pattern for alphanumeric input
  const isAlphaNumeric = /^[a-zA-Z0-9]*$/;
  
  // Check if the input value matches the pattern
  const isValid = isAlphaNumeric.test(value);
  
  // Valid input: display confirmation and submit the form
  if (isValid) {
    alert("Your input was valid! Submitting now.");
  } else {
    // Invalid input: display error message
    alert("Invalid format! Must be an alpha-numeric value");
    
    // Prevent form from submitting
    event.preventDefault();
  }

}

// Retreive form and add submission listener
// const form = document.forms.myForm;
const form = document.getElementById("myForm");
form.addEventListener("submit", validateForm);