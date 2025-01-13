document.getElementById("webForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("mail").value.trim();
    const num = document.getElementById("num").value.trim();
    const msg = document.getElementById("msg").value.trim();
    if (!name || !email || !msg || !num) {
        alert("Please fill out all fields.");
        return;
    }
    if (isNaN(num) || num.length !== 10) {
        alert("Please enter a valid mobile number.");
        return;
    }
    alert("Registration successful!");
    document.getElementById("webForm").reset();
});
