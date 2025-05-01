let logInForm= document.getElementById("lform")
logInForm.addEventListener("submit",function(event){
    event.preventDefault();

    alert("You have clicked me!!");

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("email",email);

    window.location.href = "home.html";
});
const welcomemessage = document.getElementById("welcomemessage");
if (welcomemessage) {
    const firstName = sessionStorage.getItem("firstName");
};
if (firstName) {
    welcomemessage.textContent = `Welcome, ${firstName}!`;
} else {
    window.location.href = "login.html";
}
/*document.addEventListener("DOMContentLoaded", function(){
    let button1 = document.getElementById("lbutton");
    button1.addEventListener("click", function(){
    alert("You have clicked me!!")
    });
})
 //  button1.style.backgroundColor = "purple";*/