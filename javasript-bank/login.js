/**     --- page 1 ---
 1. add click event handler with the submit button
 2. get the email address inside the email input field
 3. get the password inside the password input field
 4. verify email and password
*/

// step-1
const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function () {
    // step-2
    // always remember to use [].value] to get text from an input field
    const emailField = document.getElementById('email');
    const email = emailField.value;
    // step-3
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    // * DANGER: DO NOT VERIFY email password on the client side
    // step-4
    if (email === "child@baap.com" && password === "secret") {
        window.location.href = "bank.html";
    }
    else {
        alert("Please!! insert valid email and password");
    }
})


/** 
 1. add click event handler in the deposit button
 2. get the value in deposit input field
 3. take the amount of deposit div
 4. update the amount of deposit div
 5. take the amount of balance div
 6. update the amount of balance div
*/
