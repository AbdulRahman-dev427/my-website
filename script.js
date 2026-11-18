

function showMessage() {
    alert("Welcome! Let's create something amazing.");
}

function sendMessage() {
    const name = document.getElementById("name").value;

    if (name.trim() === "") {
        alert("Please enter your name!");
    } else {
        alert("Thank you, " + name + "! Your message is received.");
    }
}
