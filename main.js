const cardNumber = document.querySelector('.card-front__number');
const cardName = document.querySelector('.card-front__name');
const cardExpDate = document.querySelector('.card-front__expiry');
const cardCCV = document.querySelector('.card-back__ccv');

const inputName = document.getElementById('input-card-name');
const inputCardNumber = document.getElementById('input-card-number');
const inputExpMonth = document.getElementById('input-month');
const inputExpYear = document.getElementById('input-year');
const inputCCV = document.getElementById('input-ccv');

const form = document.querySelector('.form');
const formResponse = document.querySelector('.form-response');
const alertMessageNumber = document.querySelector('.alert-message-number')
const alertMessageName = document.querySelector('.alert-message-name')
const alertMessageCCV = document.querySelector('.alert-message-ccv')
const alertMessageMonth = document.querySelector('.alert-message-month')
const alertMessageYear = document.querySelector('.alert-message-year')
const formContainer = document.querySelector('.form-container')

console.log(formContainer)
// Add all details to card

function addCardDetails(e) {
  e.preventDefault();

  // Check if all fields are not empty

if (inputCardNumber.value === '' || inputCardNumber.value.length < 16) {
    inputCardNumber.style.border = '1px solid red';
    alertMessageNumber.innerHTML = inputCardNumber.value === '' ? 'Please enter a number' : 'Wrong format';
}

if (inputName.value === '') {
    inputName.style.border = '1px solid red';
    alertMessageName.innerHTML = 'Please enter a name';
}

if (inputCCV.value === '') {
    inputCCV.style.border = '1px solid red';
    alertMessageCCV.innerHTML = 'Can\'t be blank';
}

if (inputExpMonth.value === '' || inputExpYear.value === '') {
    
    if(inputExpMonth.value === '') {
      inputExpMonth.style.border = '1px solid red';
      alertMessageMonth.classList.add('show')
    } 
    if(inputExpYear.value === '') {

      inputExpYear.style.border = '1px solid red';
    }
  
    alertMessageMonth.innerHTML = 'Can\'t be blank';
    return;
}

console.log(formContainer)

formContainer.style.display = 'none';
formResponse.style.display = 'block'


  cardNumber.innerHTML = addSpacesToNumber(inputCardNumber.value)
}



// Add number to card live

function displayCardNumber(e) {
    const number = e.target.value;
    const formatedNumber = addSpacesToNumber(number)

    if(formatedNumber.length > 19) {
        e.target.value = number.slice(0, 16);
    } else {
        cardNumber.innerHTML = formatedNumber
    }
  }

// Add name to card live

function displayName(e) {
    let inputValue = e.target.value;
  const sanitizedInputValue = inputValue.replace(/[0-9]/g, ''); // remove all numbers from input value
  if (sanitizedInputValue !== inputValue) {
    e.target.value = sanitizedInputValue; // update input field value with sanitized value
    inputValue = sanitizedInputValue; // update input value variable with sanitized value
  }
  if (inputValue.length > 30) {
    inputValue = inputValue.slice(0, 30); // truncate input value to maximum of 30 characters
    e.target.value = inputValue; // update input field value with truncated value
  }
    cardName.innerHTML = inputValue
}

// Add and limit month to card

function displayLimitMonth(e) {
    // Limit input

    if (e.target.value.length > 2) {
        e.target.value = e.target.value.slice(0, 2);
      }

      if (e.target.value > 12) {
        e.target.value = 12;
      }

      const month = document.getElementById('month').innerHTML = e.target.value

      
    
}

function displayLimitYear(e) {
    const currentYear = new Date().getFullYear();
    const lastTwoDigits = currentYear % 100;

    if (e.target.value.length > 2) {
        e.target.value = e.target.value.slice(0, 2);
      }

    const year = document.getElementById('year').innerHTML = e.target.value

  }

// Display Limit CCV
  
function displayLimitCCV(e) {
    e.target.value = e.target.value.replace(/\D/g, '')
    if (e.target.value.length > 3 || isNaN(e.target.value)) {
      e.target.value = e.target.value.slice(0, 3);
    }
  
    cardCCV.innerHTML = e.target.value
  }
  
// Add spaces to number

function addSpacesToNumber(number) {
    const pattern = /(\d{1,4})/g;
    const parts = number.toString().match(pattern);
    if (!parts) {
      return number;
    }
    return parts.join(' ');
  }


function addEventListeners() {
  form.addEventListener('submit', addCardDetails);

  inputCardNumber.addEventListener('input', displayCardNumber);
  inputName.addEventListener('input', displayName)  
  inputExpMonth.addEventListener('input', displayLimitMonth);
  inputExpYear.addEventListener('input', displayLimitYear);
  inputCCV.addEventListener('input', displayLimitCCV); 


}

addEventListeners();