// This is for scrolling to the top of the form if the page is reloaded
document.getElementById("title").scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest",
});

let form = document.querySelector("#studentForm");
let errorFlags = [];

// Too small to be bothered to move it to separate data file.
// If i18n was allowed, I would've done it.
let errorMsg = {
  firstname: "Please fill in the first name field.",
  lastname: "Please fill in the last name field.",
  icNumber:
    "Please enter a valid IC number in the correct format (e.g. XXXXXX-XX-XXXX)",
  phoneNumber: "Please enter a valid phone number.",
  birthDate: "Please enter a valid date of birth.",
  homeAddress: "Please enter a home address.",
  eLevel: "Please select an education level.",
};

// Form onSubmit listener
form.addEventListener("submit", (e) => {
  // Form output object. Preferably, this would've been passed on to a backend API
  let formOut = {};
  // Error message builder. If there's any specific errors,
  // they will be shown in the alert.
  errorFlags = ["Error submitting form. Please resolve these issues:\n"];
  // What types of inputs is included in the form.
  let inputTypes = ["input", "textarea", "select"];

  // If form is invalid?
  if (!form.checkValidity()) {
    // We loop through each input type
    for (let i = 0; i < inputTypes.length; i++) {
      // and then loop through each of those inputs
      form.querySelectorAll(inputTypes[i]).forEach((ele) => {
        // To see which one is valid. If yes, we remove the error-input css class
        if (ele.checkValidity()) ele.classList.remove("error-input");
        // If not...
        else {
          // We append the according error message
          errorFlags.push(errorMsg[ele.name]);
          // ...and add the error-input css class
          ele.classList.add("error-input");
        }
      });
    }
    // Display the errors to the user
    alert(errorFlags.join("\n"));
    // This to stop the submit button from reloading/redirecting the page.
    e.preventDefault();
  } else {
    // If the form is valid?
    // We loop through all the form's inputs
    for (let i = 0; i < e.target.length; i++) {
      let item = e.target[i];
      // If item has no name (submit button) then skip
      if (item.name === "") continue;
      // and we map to form out object
      formOut[item.name] = item.value;
    }
    // ...and show the alert to the user
    // (This is where a redirect is supposed to happen, but eh)
    alert(JSON.stringify(formOut, null, 2));
  }
});
