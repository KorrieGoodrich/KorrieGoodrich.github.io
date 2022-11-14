// This page asks users to verify their age, and then provides different output based on the input.

// Create the variable named userage.
var userage;

// Assigns a value to userage.
userage = prompt("Please enter your age: ")
if (userage >= 65) {
    output = "Free Coffee Friday Night for Seniors!"
    document.getElementById('verify').style.color = 'red';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
    document.getElementById('verify').style.fontWeight = 'bold';
    document.getElementById('verify').style.fontSize = 'x-large';
} else {
    output = "Enjoy Music and Make Memories!"
}

document.getElementById("verify").innerHTML = output;