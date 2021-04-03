// Javascript Goes here

// Store Form Elements in variables // const Element = document.getElementById('');
const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const jobRoleElement = document.getElementById('jobRole');
const otherRoleElement = document.getElementById('otherRole');
const sizeElement = document.getElementById('size');
const designElement = document.getElementById('design');
const colorElement = document.getElementById('color');
const checkboxElements = document.querySelectorAll('input["type=checkbox"]');
const paymentMethodElement = document.getElementById('payment');
const ccExpireMonthElement = document.getElementById('exp-month');
const ccExpireYearElement = document.getElementById('exp-year');
const ccCardNumberElement = document.getElementById('cc-num');
const ccZipCodeElement = document.getElementById('zip');
const ccCVVElement = document.getElementById('cvv');
const payPalInfoBlock = document.getElementById('paypal');
const bitcoinInfoBlock = document.getElementById('bitcoin');


// create ValidationPass and ValidationFail functions that update the valid and error CSS 

// Create Helper Functions to validate input
// create isValid variable that stores the result of a regex test on the input
// return the isValid Variable

// Add real time validation by adding key up or change event listeners that pass validation helper functions as callbacks

// Add event Listener for form submit
// preventDefault if one of the validation functions comes back false

// add on focus to the checkbox elements for accessibility

//hide other job role
// hide credit card fields
// hide Paypal helper text
// hide Bitcoin helper text
// set focus to the name field