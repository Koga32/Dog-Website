document.getElementById("signUpForm").addEventListener("submit", function (event) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    if (email.trim() === '' || password.trim() === '' || firstName.trim() === '' || lastName.trim() === '' || password2.trim() === '') {
        alert("Harap isi semua :)");
        event.preventDefault(); // Mencegah formulir untuk dikirim (mencegah default behavior)
    } else {
        // Jika email dan password terisi, arahkan pengguna ke halaman main.html
        window.location.replace("main.html");
        event.preventDefault(); // Mencegah formulir untuk dikirim (mencegah default behavior)
    }
});