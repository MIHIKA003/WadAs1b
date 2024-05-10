document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;

    const userData = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        city: city
    };

    // AJAX POST request to register user
    let xhrRegister = new XMLHttpRequest();
    xhrRegister.open("POST", "https://jsonplaceholder.typicode.com/users");
    xhrRegister.setRequestHeader("Content-type", "application/json");
    xhrRegister.onload = function() {
        if (xhrRegister.status === 201) {
            alert("User registered successfully!");
            window.location.href = "user-list.html"; // Redirect to user list page after successful registration
        } else {
            alert("Failed to register user.");
        }
    };
    xhrRegister.send(JSON.stringify(userData));

    // Store user data in localStorage
    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    registeredUsers.push(userData);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    alert("User registered successfully!");
    window.location.href = "user-list.html"; // Redirect to user list page after successful registration
});