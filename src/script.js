let logInForm= document.getElementById("lform")
logInForm.addEventListener("submit",function(event){
    event.preventDefault();

    const firstName = doccument.getElementById("firstNmae").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("email",email);
    window.location.href ="index.html";
});
const firstName = sessionStorage.getItem("firstName");
if (firstName) {
    document.getElementById("welcomemessage").textContent = `Welcome, ${firstName}!`;
} else {
    window.location.href = "login.html";
}