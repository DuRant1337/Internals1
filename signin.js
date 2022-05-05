const username = "Admin";
const password = "Admin";
const login_attemps = null;

if (sessionStorage.getItem(login_attemps) == null) window.sessionStorage.setItem("login_attemps", "0");
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var counter = parseInt(sessionStorage.getItem("login_attemps"))

    if (username == "admin" && password == "admin") {
        alert("login succesfully");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        window.location.replace("adminpage.html");

    } else {
        if (counter == 3) {
            alert("No Login attempts left ");
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("AdminLogin").disabled = true;
        } else {
            counter = counter + 1;
            alert("login failed " + (3 - counter) + " attemps left");
            sessionStorage.setItem("login_attemps", counter);
        }

    }
}
