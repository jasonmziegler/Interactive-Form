// Javascript Goes here

// Store Form Elements in variables // const Element = document.getElementById('');
const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const jobRoleElement = document.getElementById('jobRole');
const otherRoleElement = document.getElementById('otherRole');
const sizeElement = document.getElementById('size');
const designElement = document.getElementById('design');
const colorElement = document.getElementById('color');
const checkboxElements = document.querySelectorAll("input[type='checkbox']");
const paymentMethodElement = document.getElementById('payment');
const ccExpireMonthElement = document.getElementById('exp-month');
const ccExpireYearElement = document.getElementById('exp-year');
const ccCardNumberElement = document.getElementById('cc-num');
const ccZipCodeElement = document.getElementById('zip');
const ccCVVElement = document.getElementById('cvv');
const payPalInfoBlock = document.getElementById('paypal');
const bitcoinInfoBlock = document.getElementById('bitcoin');


// create ValidationPass and ValidationFail functions that update the valid and error CSS 
function validationPass(domObject) {
    console.log("Validation passed from validationPass", domObject);
    domObject.classList.remove('error')
}
function validationFail(domObject) {
    domObject.classList.add('error');
}
// Create Helper Functions to validate input
function isValidEmail(email) {
    let emailInput = email;
    console.log('Email Input from isValidEmail', emailInput);
    return false;
}
// create isValid variable that stores the result of a regex test on the input
// return the isValid Variable

// Add real time validation by adding key up or change event listeners that pass validation helper functions as callbacks

// Add event Listener for form submit
// preventDefault if one of the validation functions comes back false
emailElement.addEventListener('keyup', (e)=>{
    let emailInputHTML = e.target;
    let emailInput = e.target.value;
    console.log(emailInput);
    if (isValidEmail(emailInput)) {
        validationPass(emailInputHTML);
    } else {
        //call validation fail function
        validationFail(emailInputHTML);
    }
    // check to see if email field
    // run email validation function
    // test if true of false and call Validation Pass or Validation Fail Functions
});
// add on focus to the checkbox elements for accessibility

//hide other job role
// hide credit card fields
// hide Paypal helper text
// hide Bitcoin helper text
// set focus to the name field