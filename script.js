const inputBox = document.getElementsByClassName("age-dob-input")[0];
const calculateBtn = document.getElementsByClassName("calculate-btn")[0];
const result = document.getElementsByClassName("age-result")[0];

function calculate() {
    if (inputBox.value === '') {//checking value is insert or not
        alert("Enter Your 'DOB'");
    } 

    const dob = new Date(inputBox.value);
    const now = new Date();

    // Check if the entered date is in the future
    if (dob > now) {
        alert("Date of birth cannot be in the future.");
    }
    
    // Calculate years, months, and days
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    if (days < 0) {
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
    result.classList.add("fade-in"); // Add animation class
}
