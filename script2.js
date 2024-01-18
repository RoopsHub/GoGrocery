// script2.js
function proceedToPay() {
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryMonth = document.getElementById("expiryMonth").value;
    const expiryYear = document.getElementById("expiryYear").value;
    const cvv = document.getElementById("cvv").value;
  
    // For now, log the entered card details to the console
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryMonth, expiryYear);
    console.log("CVV:", cvv);
    alert("Payment Successful! Thank you for shopping with GoGrocery!");
  }
  