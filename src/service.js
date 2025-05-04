let services = JSON.parse(localStorage.getItem("services")) ||[];
let serviceForm = document.getElementById("serviceform");
let serviceList = document.getElementById("servicelist");

serviceForm.addEventListener("submit",function(event) {
    event.preventDefault();

    alert("You have clicked me!!");

    const service = document.getElementById("service").value.trim();
    const description = document.getElementById("description").value.trim();
    const price = document.getElementById("price").value.trim();
    const image = document.getElementById("image").value.trim();

const newService = {
    service: service,
    description: description,
    price: price,
    image: image
};
services.push(newService);
localStorage.setItem("services",JSON.stringify(services));
displayServives(services);
serviceForm.reset();
});

function displayServices(data) {
    serviceList.innerHTML = ""
    data.forEach(item => {
        let div =document.createElement("div")
        div.className= "service"
        div.innerHTML = `
        <img src= "${item.image}" alt="${item.service}"/>
        <h3>${item.service}</h3>
        <h3>${item.description}</h3>
        <h3>${item.price}</h3>
        `;
        serviceList.appendChild(div)
    });
}
displayServices(services);

//localStorage.removeItem("services")