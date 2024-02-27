document.getElementById("loginForm").addEventListener("submit", function (event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email.trim() === '' || password.trim() === '') {
        alert("Email dan password tidak boleh kosong");
        event.preventDefault(); // Mencegah formulir untuk dikirim (mencegah default behavior)
    } else {
        // Jika email dan password terisi, arahkan pengguna ke halaman main.html
        window.location.replace("main.html");
        event.preventDefault(); // Mencegah formulir untuk dikirim (mencegah default behavior)
    }
});