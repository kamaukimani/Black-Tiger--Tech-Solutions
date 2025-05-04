let logInForm= document.getElementById("lform")
logInForm.addEventListener("submit",function(event){
    event.preventDefault();

    alert("You have clicked me!!");

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email",email);

    window.location.href = "home.html";
});
const welcomemessage = document.getElementById("welcomemessage");
if (welcomemessage) {
    const firstName = localStorage.getItem("firstName");
};
if (firstName) {
    welcomemessage.textContent = `Welcome, ${firstName}!`;
} else {
    window.location.href = "index.html";
}
