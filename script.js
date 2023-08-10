// validating the day field

let dayInput = document.getElementById("day");
dayInput.addEventListener("input", validatedate);

// getting month value
let monthInput = document.querySelector("#month");
monthInput.addEventListener("input", validateMonth);

let displayMonthError = document.querySelector("#monthError");
let monthErrorMessage = "Please provide a number between 1 and 12";

// display the error

let displayDayError = document.querySelector("#dayError");
let dayErrorMessage =
  "Invalid format. Please insert valid date between 1 and 31";

function validatedate() {
  let dayValue = parseInt(dayInput.value.replace(/\D/g, ""));

  
  console.log("Inserted date", dayValue);

  //block user from typing more that 2 nums

  if (dayInput.value.length > 2) {
    dayInput.value = dayInput.value.slice(0, 2);
  }
  // validating date
  if (dayValue > 31 || dayValue <= 0) {
    displayDayError.textContent = dayErrorMessage;
    } else {
     
    setTimeout(() => {
      displayDayError.textContent = ""; // clear  error after 3sec
    }, 3000);
  }
}


//validating the month field


function validateMonth() {
  let dayValue = parseInt(dayInput.value.replace(/\D/g, ""));

  let validatedmonth = parseInt(monthInput.value.replace(/\D/g, ""));
  let monthValue = parseInt(monthInput.value.replace(/\D/g, "")); // Added to get the month value

  console.log("Inserted month:", monthValue);
  if (monthInput.value.length > 2) {
    monthInput.value = monthInput.value.slice(0, 2);
  }

  // getInput = monthInput.value
  // console.log('user inserted = ', getInput)
  if (monthValue > 12 || monthValue <= 0) {
    displayMonthError.textContent = monthErrorMessage;
    setTimeout(() => {
      displayMonthError.textContent = "";
      monthInput.value = "";
    }, 2000);
  } if (
    (monthValue === 2 && dayValue > 28) ||
    ((monthValue === 4 || monthValue === 6 || monthValue === 9 || monthValue === 11) && dayValue > 30)
  ) {
    displayDayError.textContent = dayErrorMessage;
  
  }  else {
    setTimeout(() => {
      displayMonthError.textContent = "";
    }, 2000);
  }
}

// getting the value of the year

let yearInput = document.querySelector("#year");
yearInput.addEventListener("input", validateYear);

// getting the current year
let getCurrentDate = new Date();
let currentDate = getCurrentDate.getDate();
// let currentMonth = getCurrentDate.getMonth() +1;
let currentYear = getCurrentDate.getFullYear();


// to display error message for year
let yearError = document.getElementById("yearError");
let yearErrorMessage = `Date must be between 1900 and ${currentYear}`;

function validateYear() {
  let validateYear = parseInt(this.value.replace(/\D/g, ""));
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
  if (validateYear < 1900 || validateYear >= currentYear) {
    yearError.textContent = yearErrorMessage;
  } else {
    yearError.textContent = "";
  }
}

// attach event listener to submit button

let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let insertedDate = dayInput.value;
  let insertedMonth = monthInput.value;
  let insertedYear = yearInput.value;
  const currentDate = new Date();
  
  
  const birthDate = new Date(insertedYear, insertedMonth - 1, insertedDate);
  console.log('Display birthday', birthDate)

  const ageInMilliseconds = currentDate - birthDate;
  const ageDate = new Date(ageInMilliseconds);
  const ageInYears = currentDate.getFullYear() -ageDate.getUTCFullYear() -1;
  const ageInMonths = ageDate.getUTCMonth();
  const ageInDays = ageDate.getUTCDate() - 1;

  // validating based on months

  let years = document.querySelector('#calculatedYears')
  let months = document.querySelector('#calculatedMonths')
  let days = document.querySelector('#calculatedDays')
  years.textContent = ageInYears
  months.textContent = ageInMonths
  days.textContent = ageInDays

  
  
  
});
