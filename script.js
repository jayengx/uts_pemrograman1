document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Ambil data pendaftaran dari Local Storage
    var registeredUsername = localStorage.getItem("username");
    var registeredPassword = localStorage.getItem("password");

    // Periksa apakah username dan password yang dimasukkan sesuai dengan yang terdaftar
    if (username === registeredUsername && password === registeredPassword) {
        // Redirect ke halaman dashboard atau lakukan sesuatu setelah login berhasil
        window.location.href = "pembayaran.html";
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password.";
    }
});
