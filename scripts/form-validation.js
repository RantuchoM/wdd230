document.addEventListener('DOMContentLoaded', function () {
    const rangevalue = document.getElementById("rangevalue");
    const range = document.getElementById("rating");

    // RANGE event listener
    range.addEventListener('change', displayRatingValue);
    range.addEventListener('input', displayRatingValue);

    function displayRatingValue() {
        rangevalue.innerHTML = range.value;
    }


    const kp1 = document.querySelector("#pass1");
    const kp2 = document.querySelector("#pass2");
    const message = document.querySelector("#formmessage");
    const emailMessage = document.querySelector("#emailMessage");

    kp2.addEventListener("focusout", function() {
        if (kp2.value === "") {
            kp2.blur();
        } else {
            checkSame();
        }
    });


    function checkSame() {
        if (kp1.value !== kp2.value) {
            message.textContent = "❗Passwords do not match. Please try again.";
            message.style.display = "block";
            kp2.style.backgroundColor = "#fff0f3";
            kp2.value = "";
            kp2.focus();
        } else {
            message.style.display = "none";
            kp2.style.backgroundColor = "#fff";
            kp2.style.color = "#000";
        }
    }
    const emailInput = document.getElementById("email");
    
    emailInput.addEventListener('focusout', function () {
        const isValid = /^[a-zA-Z0-9._%+-]+@byui\.edu$/.test(emailInput.value);
        
        
        if (!isValid) {
            emailMessage.textContent = "Please enter a valid BYUI email address.";
            emailMessage.style.display = "inline";
            emailInput.style.borderLeft = "red solid 6px";
            
        } else {
            emailMessage.textContent = "";
            emailMessage.style.display = "none";
            emailInput.style.borderLeft = "green solid 6px";
        }
    });
    
    emailInput.addEventListener('input', function () {
        const isValid = /^[a-zA-Z0-9._%+-]+@byui\.edu$/.test(emailInput.value);
        
        if (!isValid) {
            emailInput.setCustomValidity("Please enter a valid BYUI email address");
        } else {
            emailInput.setCustomValidity("");
        }
    });
});