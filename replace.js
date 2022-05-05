function pageToStaffs() {
    window.location.replace("./ManageStaff.html");

}
function pageToStudents() {
    window.location.replace("./ManageStudents.html");
}
function toggleForm(){
    var x = document.querySelector(".form")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
