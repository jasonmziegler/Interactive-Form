// Javascript Goes here

// Store Form Elements in variables // const Element = document.getElementById('');
const form = document.querySelector('form');
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
    //console.log("Validation passed from validationPass", domObject);
    domObject.classList.remove('error');
    let hint = domObject.nextElementSibling;
    if (hint != null && hint.classList.contains('hint')) {
        hint.style.display = "none";
        //console.log(hint.style.display);
    }
}
function validationFail(domObject) {
    //console.log('failed!', domObject);
    domObject.classList.add('error');
    let hint = domObject.nextElementSibling;
    //console.log(hint);
    if (hint != null && hint.classList.contains('hint')) {
        hint.style.display = "inherit";
    }
}
// Create Helper Functions to validate input
function isValidName(name) {
    // test to make sure a name is entered
    return /./.test(name);
}
function isValidEmail(email) {
    //let emailInput = email;
    //console.log('Email Input from isValidEmail', emailInput);
    // email regex from https://emailregex.com/
    let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegex.test(email);
}

function isValidExpirationMonth(expirationMonth) {
    //console.log('Check for Valid Expiration Month');
    //https://stackoverflow.com/questions/32435949/regex-to-allow-only-number-between-1-to-12
    return /1[0-2]|[1-9]/.test(expirationMonth);
}

function isValidExpirationYear(expirationYear) {
    //console.log('Check for Valid Expiration Year');
    //https://stackoverflow.com/questions/4374185/regular-expression-match-to-test-for-a-valid-year
    return /^\d{4}$/.test(expirationYear);
}

function isValidCCNumber(ccNumber) {
    //console.log('Check for Valid CC');
    return /^\d{13}\d?\d?\d?$/.test(ccNumber);
}

function isValidCVVNumber(cvvNumber) {
    //console.log('Check for Valid CVV');
    return /^\d{3}$/.test(cvvNumber);
}

function isValidZipCode(zipCode) {
    //console.log('Check for Valid ZipCode');
    return /^\d{5}$/.test(zipCode);
}

// create isValid variable that stores the result of a regex test on the input
// return the isValid Variable

// Add real time validation by adding key up or change event listeners that pass validation helper functions as callbacks
nameElement.addEventListener('keyup', (e)=>{
    let nameInputHTML = e.target;
    let nameInput = e.target.value;
    //console.log(nameInput);
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
    //console.log(emailInput);
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
    //console.log(roleSelection);
    if (roleSelection==='other') {
        e.target.nextElementSibling.style.display = "inherit";
    } else {
        e.target.nextElementSibling.style.display = "none";
    }
});

designElement.addEventListener('change', (e) => {
    // https://stackoverflow.com/questions/7373058/changing-the-selected-option-of-an-html-select-element/7373115
    colorElement.selectedIndex = 0;
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
            //option.setAttribute('disabled', false);
            // console.log(option);
        } else {
            option.setAttribute('hidden', true);
            //option.setAttribute('disabled', true);
            // console.log(option);
        }
    }
 }
});

// Checkboxes
let checkoutTotal = 0;
// Create a variable to store all of the checkboxes
let checkboxes = document.querySelectorAll('#activities-box > Label > input[type="checkbox"]');
// add on focus to the checkbox elements for accessibility
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('focus', (e) => {
        let focused = e.target;
        //console.log("Focused: ", focused);
        focused.parentNode.classList.add('focus');
    });
    checkboxes[i].addEventListener('blur', (e) => {
        let blurred = e.target;
        //console.log("Focused: ", blurred);
        blurred.parentNode.classList.remove('focus');
});
}
// Create Event listener for checkboxes
document.querySelector('#activities-box').addEventListener('change', (e) => {
//  created a clicked variable and store e.target

    let clicked = e.target;
    if (clicked.type === 'checkbox') {
// get the data-day-and-time attribute value and store in a clickedType variable
        let clickedType = e.target.getAttribute('data-day-and-time');
        //console.log('Clicked Target: ', clicked);
        //console.log('Clicked Type: ', clickedType);
    // Loop over the checkboxes
        for (let i = 0; i < checkboxes.length; i++) {
    // create a variable to store the current iteration's dataype
            let checkboxType = checkboxes[i].getAttribute('data-day-and-time');
    // Create if statement to disable/enable the other items with the same data-day-and-time datatype (make sure don't disable checkbox that was just clicked)
            if (clickedType === checkboxType && clicked !== checkboxes[i]) {
    // inside previous if create if check to see if the box is being checked or unchecked .checked (true or false)
                if (clicked.checked) {
                    checkboxes[i].disabled = true;
                } else {
    // set disable propery to the checkboxes[i] to true if being checked and false if being unchecked
                    checkboxes[i].disabled = false;
                }
            }
        }
        
        // Handle Total 
        // see if clicked.check
        let courseCost = parseInt(clicked.getAttribute('data-cost')); 
        let checkoutTotalDisplay = document.querySelector('p#activities-cost');
        if (clicked.checked) {
            document.getElementById('activities-hint').classList.add('hint');
            //get cost of course           
            // Add course cost to total
            checkoutTotal += courseCost;
            // update the p#activities-cost with new total       
            
        } else {
            checkoutTotal -= courseCost;
        }
        checkoutTotalDisplay.textContent = `Total: $${checkoutTotal}`;
    }
});

ccExpireMonthElement.addEventListener('change', (e) => {
    let value = e.target.value;
    let inputHTML = e.target;
    //console.log(value);
    //console.log(inputHTML);
    if (isValidExpirationMonth(value)) {
        //console.log(ccExpireMonthElement.classList);
        validationPass(ccExpireMonthElement);
        
    } else {
        validationFail(inputHTML);
    }
});


ccExpireYearElement.addEventListener('change', (e) => {
    let value = e.target.value;
    let inputHTML = e.target;
    //console.log(value);  
    if (isValidExpirationYear(value)) {
        validationPass(inputHTML);
    } else {
        //call validation fail function
        validationFail(inputHTML);
    }
});

ccCardNumberElement.addEventListener('keyup', (e) => {
    let value = e.target.value;
    let inputHTML = e.target;
    //console.log(value);  
    if (isValidCCNumber(value)) {
        validationPass(inputHTML);
    } else {
        //call validation fail function
        validationFail(inputHTML);
    }
});

ccZipCodeElement.addEventListener('keyup', (e) => {
    let value = e.target.value;
    let inputHTML = e.target;
    //console.log(value);
    if (isValidZipCode(value)) {
        validationPass(inputHTML);
    } else {
        //call validation fail function
        validationFail(inputHTML);
    }
});

ccCVVElement.addEventListener('keyup', (e) => {
    let value = e.target.value;
    let inputHTML = e.target;
    //console.log(value);  
    if (isValidCVVNumber(value)) {
        validationPass(inputHTML);
    } else {
        //call validation fail function
        validationFail(inputHTML);
    }
});

paymentMethodElement.addEventListener('change', (e) => {
  let paymentSelection = e.target.value;
  //console.log('Payment Selection', paymentSelection);

  if (paymentSelection === 'credit-card') {
    creditCardBlock.style.display = "inherit";
    payPalInfoBlock.style.display = "none";
    bitcoinInfoBlock.style.display = "none";

  } else if (paymentSelection === 'paypal') {
    creditCardBlock.style.display = "none";
    payPalInfoBlock.style.display = "inherit";
    bitcoinInfoBlock.style.display = "none";
  } else if (paymentSelection === 'bitcoin') {
    creditCardBlock.style.display = "none";
    payPalInfoBlock.style.display = "none";
    bitcoinInfoBlock.style.display = "inherit";
  }
});
// Add event Listener for form submit
form.addEventListener('submit', (e) => {
    //console.log('Form Submitted Attempt!');
    if (checkoutTotal === 0) {
        //console.log('No Activities Prevented Submission');
        document.getElementById('activities-hint').classList.remove('hint');
        document.getElementById('activities-hint').style.color = 'red';
        e.preventDefault();
    }
    if (!isValidName(nameElement.value)) {
        //console.log('Invalid Name Prevented Submission');
        validationFail(nameElement);
        e.preventDefault();
    }

    if (!isValidEmail(emailElement.value)) {
        //console.log('Invalid email Prevented Submission');
        validationFail(emailElement);
        e.preventDefault();
    }
    if (paymentMethodElement.value === 'credit-card') {
        if (!isValidExpirationMonth(ccExpireMonthElement.value)) {
            //console.log('Invalid expriation month Prevented Submission');
            validationFail(ccExpireMonthElement);
            e.preventDefault();
        }
        if (!isValidExpirationYear(ccExpireYearElement.value)) {
            //console.log('Invalid expiration Year Prevented Submission');
            validationFail(ccExpireYearElement);
            e.preventDefault();
        }
        if (!isValidCCNumber(ccCardNumberElement.value)) {
            //console.log('Invalid CC number Prevented Submission');
            validationFail(ccCardNumberElement);
            e.preventDefault();
        }
        if (!isValidZipCode(ccZipCodeElement.value)) {
            //console.log('Invalid Zip Code Prevented Submission');
            validationFail(ccZipCodeElement);
            e.preventDefault();
        }
        if (!isValidCVVNumber(ccCVVElement.value)) {
            //console.log('Invalid CVV Prevented Submission');
            validationFail(ccCVVElement);
            e.preventDefault();
        }            
    } else if (paymentMethodElement.value === 'select method') {
        console.log('Please select Payment Method');
        e.preventDefault();   
    }
});
// preventDefault if one of the validation functions comes back false



//hide other job role
otherRoleElement.style.display = "none";
// hide credit card fields
creditCardBlock.style.display = "none";
// hide Paypal helper text
payPalInfoBlock.style.display = "none";
// hide Bitcoin helper text
bitcoinInfoBlock.style.display = "none";
// set focus to the name field
nameElement.focus();
/// Disable colorElement until Design Selected
colorElement.setAttribute('disabled', 'disabled');