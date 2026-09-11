function register() {

    let name = document.getElementById("name").value;
    let blood = document.getElementById("blood").value;
    let location = document.getElementById("location").value;
    let phone = document.getElementById("phone").value;

    let user = { name, blood, location, phone };

    localStorage.setItem("user", JSON.stringify(user));

    window.location="index.html";

}

function login() {

    window.location = "home.html";

}

function donate() {

    alert("Thank you for donating blood");

}

function showDonors() {

    let donors = [
        { name: "Ramesh", blood: "O+", location: "Vijayawada", phone: "9876543210" },
        { name: "Suresh", blood: "A+", location: "Guntur", phone: "9123456789" },
        { name: "Kiran", blood: "B+", location: "Vijayawada", phone: "9000000000" }
    ];

    let div = document.getElementById("donorList");

    div.innerHTML = "";

    donors.forEach(d => {

        div.innerHTML += `
<p>
${d.name} | ${d.blood} | ${d.location} | ${d.phone}
</p>
`;

    });

}

function counter(id, end) {
    let count = 0
    let element = document.getElementById(id)

    let interval = setInterval(function () {

        count++
        element.innerText = count

        if (count == end) {
            clearInterval(interval)
        }
    }, 20)
}
counter("donors", 1200)
counter("lives", 800)
counter("requests", 350)


function getlocation() {
    navigator.geolocation.getCurrentPosition(function (pos) {
        alert("Location captured!");
    })
}

function submitRequest() {
    let inputs = document.querySelectorAll(".request-form input,.request-form select,.request-form textarea");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "" ||
            inputs[i].value === "select Blood Group" ||
            inputs[i].value === "Urgency Level") {
            alert("please fill all details!");
            return;
        }
    }
    alert("Blood Request Submitted Successfully!");

    inputs.forEach(input => input.value = "");
    inputs.forEach(input => {
        if(input.tagName === "SELECT")
    {
        input.selectedIndex = 0;
    }
        else
    {
        input.value = "";
    }
});

}

function showDonors() {
    let donorList = document.getElementById("donorList");
    donorList.innerHTML = "";
    let donors = [
        { name: "Ramesh", blood: "o+", location: "Vijayawada", phone: "9876543210" },
        { name: "Suresh", blood: "B+", location: "Nellore", phone: "9123456789" },
        { name: "Kiran", blood: "A+", location: "Guntur", phone: "9000000000" },
    ];
    donors.forEach(function (d) {
        donorList.innerHTML += `
        <div class="donor-card">
        <h3>${d.name}</h3>
        <p>Blood:${d.blood}</p>
        <p>Location:${d.location}</p>
        <p>${d.phone}</p>
        <button onclick="callDonor('${d.phone}')">Call</button>
        </div>
        `;
    });
}

function callDonor(phone) {
    alert("Calling" + phone);
}


function handleDonate(){
    let inputs=document.querySelectorAll(".donate-form input,.donate-form select,.donate-form textarea");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "" ||
            inputs[i].value === "select Your Blood Group") {
            alert("please fill all details!");
            return;
        }
    }
    alert("Thank You For Registering as a donor!");

    inputs.forEach(input => {
        if(input.tagName === "SELECT"){
        input.selectedIndex = 0;
    }else{
        input.value = "";
    }
});


}

document.querySelectorAll(".faq-box h4").forEach(q => {
    q.addEventListener("click", () => {
        let p = q.nextElementSibling;
        p.style.display = p.style.display === "block" ? "none" : "block";
    });
});
