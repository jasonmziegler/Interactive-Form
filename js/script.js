// Javascript Goes here

// Store Form Elements in variables // const Element = document.getElementById('');
const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const jobRoleElement = document.getElementById('title');
const otherRoleElement = document.getElementById('other-job-role');
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
const creditCardBlock = document.getElementById('credit-card');
const payPalInfoBlock = document.getElementById('paypal');
const bitcoinInfoBlock = document.getElementById('bitcoin');


// create ValidationPass and ValidationFail functions that update the valid and error CSS 
function validationPass(domObject) {
    //console.log("Validation passed from validationPass", domObject)
    domObject.classList.remove('error');
    let hint = domObject.nextElementSibling;
    if (hint.classList.contains('hint')) {
        hint.style.display = "none";
        console.log(hint.style.display);
    }
}
function validationFail(domObject) {
    console.log('failed!');
    domObject.classList.add('error');
    let hint = domObject.nextElementSibling;
    console.log(hint);
    if (hint.classList.contains('hint')) {
        hint.style.display = "inherit";
    }
}
// Create Helper Functions to validate input
function isValidName(name) {
    // test to make sure a name is entered
    return /./.test(name);
}
function isValidEmail(email) {
    let emailInput = email;
    //console.log('Email Input from isValidEmail', emailInput);
    // email regex from https://emailregex.com/
    let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegex.test(email);
}
// create isValid variable that stores the result of a regex test on the input
// return the isValid Variable

// Add real time validation by adding key up or change event listeners that pass validation helper functions as callbacks
nameElement.addEventListener('keyup', (e)=>{
    let nameInputHTML = e.target;
    let nameInput = e.target.value;
    console.log(nameInput);
    if (isValidName(nameInput)) {
        validationPass(nameInputHTML);
    } else {
        //call validation fail function
        validationFail(nameInputHTML);
    }
});
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

jobRoleElement.addEventListener('change', (e) => {
    let roleSelection = e.target.value;
    console.log(roleSelection);
    if (roleSelection==='other') {
        e.target.nextElementSibling.style.display = "inherit";
    } else {
        e.target.nextElementSibling.style.display = "none";
    }
});

designElement.addEventListener('change', (e) => {
 let designSelection = e.target.value;
 let colorOptions = colorElement.children;
//  console.log(colorOptions);
//  console.log(designSelection);
 if (designSelection === 'js puns') {
    colorElement.removeAttribute('disabled');
    for (let i = 0; i < colorOptions.length; i++) {
        let option = colorOptions[i];
        if (option.getAttribute('data-theme') === 'js puns') {
            option.removeAttribute('hidden');
            // console.log(option);
        } else {
            option.setAttribute('hidden', true);
            // console.log(option);
        }
    }
 } else if (designSelection === 'heart js') {
    colorElement.removeAttribute('disabled');
    for (let i = 0; i < colorOptions.length; i++) {
        let option = colorOptions[i];
        if (option.getAttribute('data-theme') === 'heart js') {
            option.removeAttribute('hidden');
            // console.log(option);
        } else {
            option.setAttribute('hidden', true);
            // console.log(option);
        }
    }
 }
});
// Add event Listener for form submit
// preventDefault if one of the validation functions comes back false

// add on focus to the checkbox elements for accessibility

//hide other job role
otherRoleElement.style.display = "none";
// hide credit card fields
creditCardBlock.style.display = "none";
// hide Paypal helper text
payPalInfoBlock.style.display = "none";
// hide Bitcoin helper text
bitcoinInfoBlock.style.display = "none";
// TODO: set focus to the name field

/// Disable colorElement until Design Selected
colorElement.setAttribute('disabled', 'disabled');