//Declare global variable
let bill = 0;
let tipValue = 0;
let people = 1;

const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const tipButtons = document.querySelectorAll(".tip-btn");
const customTipInput = document.querySelector("#custom-tip");
const tipAmountDisplay = document.querySelector(".tip-amount");
const totalAmountDisplay = document.querySelector(".total-amount");

//Reusable calculate function
function calculate(){
    if(bill > 0 && people > 0){
        const tipPerPerson = (bill * tipValue / 100) / people;
        const totalPerPerson = (bill / people) + tipPerPerson;

        tipAmountDisplay.textContent = `${tipPerPerson.toFixed(2)}`;
        totalAmountDisplay.textContent = `${totalPerPerson.toFixed(2)}`;
    }
};

// When the bill input changes
billInput.addEventListener('input', () => {
  bill = parseFloat(billInput.value);
  calculate();
});
