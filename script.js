// validating the day field

let dayInput= document.getElementById('day')
dayInput.addEventListener('input', validateDate)

// het error

let shoeError = document.querySelector('#dayError')
let message = 'Invalid format. Please insert a number between 1 and 31'


function validateDate(){
    const dayValue = parseInt(this.value.replace(/\D/g, ""));
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
      }


    if (dayValue > 31 || dayValue <= 0) {
        shoeError.textContent = message
    } else {
      console.log('no error')
    }

    setTimeout(()  =>{
        shoeError.textContent = ""; // clear after 3sec
    }, 3000)
  }


// getting the value inserted for month input

let monthValue = document.querySelector('#month')
let monthError = document.querySelector('#monthError')
let monthErrorMessage = 'Month must be a number between 1 -12'

monthValue.addEventListener('input', monthValidate)

function monthValidate(){
    let validatedmonth = parseInt(this.value.replace(/\D/g, ''));
    if (this.value.length >2){
        this.value = this.value.slice(0,2)
    }

    // getInput = monthValue.value
    // console.log('user inserted = ', getInput)

    if (validatedmonth >12 || validatedmonth <=0){
        monthError.textContent = monthErrorMessage
    }

    setTimeout(() => {
        monthError.textContent = '';
    },3000)


}

// getting the value of the year

let getYear = document.querySelector('#year')
getYear.addEventListener('input', validateyear)

// getting the current year
let getCurrentDate = new Date()
let currentYear = getCurrentDate.getFullYear();
console.log('logging', currentYear)

// to display error message for year
let yearError = document.getElementById('yearError')
let messageYear = `Date must be between 1900 and ${currentYear}`

function validateyear() {
    let validateYear = parseInt(this.value.replace(/\D/g, ''));
    if (this.value.length >4){
    this.value = this.value.slice(0,4)
    }
    if (validateYear < 1900 || validateYear >= currentYear ){
        
        yearError.textContent = messageYear
      
    
        
        
    } 

    setTimeout(() => {
        yearError.textContent = '';
    }, 3000)

}
