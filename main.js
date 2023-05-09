const creditNumberDisplay = document.querySelector('.card-number');
const expDate = document.querySelector('.expiration-date');
const form = document.querySelector('.form');
const inputCardNumber = document.getElementById('cardnumber');
const inputExpirationYear = document.getElementById('expiration')
const inputExpirationMonth = document.getElementById('expiration-month')
const inputCVC = document.getElementById('CVC');
const inputName = document.getElementById('name');
const formResponse = document.querySelector('.form-response');

console.log(expDate)

function addCreditNumber(e) {
    e.preventDefault()

    const number = document.getElementById('cardnumber').value
    const formattedNumber = formatCreditNumber(number)
    console.log(formattedNumber)

    const name = document.getElementById('name').value;
    const cardName = document.querySelector('.card-name');

    const month = inputExpirationMonth.value;
    const year = inputExpirationYear.value;

    const expirationDate = `${month} / ${year}`;

    expDate.innerHTML = expirationDate;
    
    cardName.innerHTML = name;

    if(inputCVC.value.length < 3 || inputCVC.value.length === '') {
        alert('Please enter a valid CVC number')
        e.preventDefault();
    } else {
        form.style.display = 'none'
        formResponse.style.display = 'block'

    }
    creditNumberDisplay.innerHTML = formattedNumber
}




function getCardNumber(e) {
    // Limit the input to 16 digits
    if (e.target.value.length > 16) {
        e.preventDefault();
        return;
    }
    let number = formatCreditNumber(e.target.value);

    creditNumberDisplay.innerHTML = number;

    if (inputCardNumber.value.length >= 16 && e.key !== 'Backspace') {
        e.preventDefault();
      }
}


function formatCreditNumber(number) {
    // Remove all non-digit characters
    number = number.replace(/\D/g, '');
  
    // Add a space after every 4 digits
    number = number.replace(/(\d{4})/g, '$1 ');
  
    // Trim any extra spaces
    number = number.trim();
  
    return number;
  }
  
  function limitInput(e) {
    if (inputExpirationYear.value.length >= 4 && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
    }
   
    if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
      }


  }
  function limitInputMonth(e) {
    if (inputExpirationMonth.value.length >= 2 && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
    }

    if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
      }

  }

  function limitInputCVC(e) {
    if (inputCVC.value.length >= 3 && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault();
      }
  
      if (e.key === 'e' || e.key === 'E') {
          e.preventDefault();
        }
  }
  


function addEventListeners() {
    form.addEventListener('submit', addCreditNumber);
    inputCardNumber.addEventListener('keydown', getCardNumber);
    inputExpirationYear.addEventListener('keydown', limitInput);
    inputExpirationMonth.addEventListener('keydown', limitInputMonth);
    inputCVC.addEventListener('keydown',limitInputCVC);


}

addEventListeners();