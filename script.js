// getting the day field

let dayInput = document.getElementById("day");
dayInput.addEventListener("input", validatedate);

// getting month value
let monthInput = document.querySelector("#month");
monthInput.addEventListener("input", validateMonth);


// error messages 
let dateErrorMessage =
  "Invalid format. Please insert valid date between 1 and 31";
let monthErrorMessage = "Please provide a number between 1 and 12";
let wrongCombinationError = "Please insert a valid date";

let getDateError = document.querySelector("#dayError");
let getMonthError = document.querySelector("#monthError");

let hasErrors = false;



function validatedate() {
  let dayValue = parseInt(dayInput.value.replace(/\D/g, ""));

  //block user from typing more that 2 nums

  if (dayInput.value.length > 2) {
    dayInput.value = dayInput.value.slice(0, 2);
  }
  // validating date
  if (dayValue > 31 || dayValue <= 0) {
    getDateError.textContent = dateErrorMessage;
    hasErrors = true; // Set the flag to indicate an error
    setTimeout(function () {
      dayInput.value = "";
      getDateError.textContent = ""; // Clear the error message after 3 seconds
    }, 3000);
  }else{
    hasErrors = false;
  }
}

//validating the month field

function validateMonth() {
  let dayValue = parseInt(dayInput.value.replace(/\D/g, ""));
  let monthValue = parseInt(monthInput.value.replace(/\D/g, "")); // Added to get the month value

  if (monthInput.value.length > 2) {
    monthInput.value = monthInput.value.slice(0, 2);
  }

  if (monthValue > 12 || monthValue <= 0) {
    getMonthError.textContent = monthErrorMessage;
    hasErrors = true; // Set the flag to indicate an error
    setTimeout(() => {
      getMonthError.textContent = "";
      monthInput.value = "";
    }, 2000);
  }
  if (
    (monthValue === 2 && dayValue > 28) ||
    ((monthValue === 4 ||
      monthValue === 6 ||
      monthValue === 9 ||
      monthValue === 11) &&
      dayValue > 30)
  ) {
    getDateError.textContent = wrongCombinationError;
    hasErrors = true; // Set the flag to indicate an error
    setTimeout(() => {
      getDateError.textContent = "";
      monthInput.value = "";
    }, 2000);
  } else {
    setTimeout(() => {
      hasErrors = false;
      getMonthError.textContent = "";
    }, 2000);
  }
}

// getting the value of the year

let yearInput = document.querySelector("#year");
yearInput.addEventListener("input", validateYear);

// getting the current year
let getCurrentDate = new Date();


let currentYear = getCurrentDate.getFullYear();

// to display error message for year
let displayYearError = document.getElementById("yearError");
let yearErrorMessage = `Year must be between 1900 and ${currentYear}`;


function validateYear() {

  let insertedYear = parseInt(this.value.replace(/\D/g, ""));
  console.log(insertedYear);

  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }

  if 
    (this.value.length ===4 && insertedYear <= 1900 ||
    insertedYear >= currentYear){
  
    displayYearError.textContent = yearErrorMessage;
    hasErrors = true; // Set the flag to indicate an error

    setTimeout(() => {
      displayYearError.textContent = ""; // Clear the error message after 3 seconds
      yearInput.value = ""; // Clear the input field
    }, 2000);
  } else {
    displayYearError.textContent = "";
    hasErrors = false;

  }

}
// attachin event listener to submit button

let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(hasErrors){
    console.log('please check errors')
    return  //Prevent form submission
  }
  setTimeout(() => {
    
  }, 4000);
  let userDate = dayInput.value;
  let userMonth = monthInput.value;
  let userYear = yearInput.value;

  // creating birthday beased on user input
  const birthDate = new Date(userYear, userMonth - 1, userDate);
  console.log("user  birthday created", birthDate);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const currentMonth = currentDate.getMonth();

  let months = currentMonth - birthMonth;
  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    years--;
    months += 12;
  }

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let days = currentDate.getDate() - birthDate.getDate();
  if (days < 0) {
    months--;
    const lastMonthDays = daysInMonth[(currentMonth + 11) % 12]; // Get the number of days in the last month
    days = lastMonthDays + days;
  }

  console.log(
    `You are ${years} years, ${months} months, and ${days} days old.`
  );

  let showYears = document.querySelector("#calculatedYears");
  let showMonths = document.querySelector("#calculatedMonths");
  let showDays = document.querySelector("#calculatedDays");
  showYears.textContent = years;
  showMonths.textContent = months;
  showDays.textContent = days;
});
