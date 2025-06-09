//Declare global variable
let bill = 0;
let tipValue = 0;
let people = 1;

const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const tipButtons = document.querySelectorAll(".tip-btn");
const customTipInput = document.querySelector("#custom-tip");
const tipAmountDisplay = document.querySelector("#tip-amount");
const totalAmountDisplay = document.querySelector("#total-amount");


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

const errorMessage = document.querySelector("#error-message");
// When People input changes
peopleInput.addEventListener("input", ()=> {
    people = parseInt(peopleInput.value);
    if(people <= 0 || isNaN(people)){
        errorMessage.style.display = "inline";
        errorMessage.textContent = "Can't be zero"
        tipAmountDisplay.textContent = `0.00`;
        totalAmountDisplay.textContent = `0.00`;
    }else{
        errorMessage.style.display = "none";
    calculate();
    }
});

// When a tip button is clicked
tipButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        tipButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

    
    tipValue = parseInt(button.getAttribute("data-tip"));
    customTipInput.value = ''; //clear custom input if a button is clicked
    calculate();
    });
});

//When custom tip is typed
customTipInput.addEventListener("input", () => {
    tipButtons.forEach(btn => btn.classList.remove("active")); //deselect buttons
    tipValue = parseFloat(customTipInput.value);
    calculate();
});

//Reset button
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => {

    //clear inputs
    billInput.value = "";
    peopleInput.value = "";
    customTipInput.value = "";

    // Remove active state from tip buttons
    tipButtons.forEach(btn => btn.classList.remove("active"));

    // Reset displays
    tipAmountDisplay.textContent = '0.00';
    totalAmountDisplay.textContent = '0.00';

    errorMessage.style.display = "none";

    //Reset global variable
    bill = 0;
    tipValue = 0;
    people = 1;
})