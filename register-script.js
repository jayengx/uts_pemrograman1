document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;

    // Simpan data pendaftaran ke Local Storage
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);

    // Redirect ke halaman login setelah registrasi berhasil
    window.location.href = "index.html";
});