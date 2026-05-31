const menu = document.querySelector(".nav-menu-small");
const menuBar = document.querySelector(".nav_menu-bar");

menuBar.addEventListener("click", (e) => {
  menu.classList.toggle("show");
});

const button = document.getElementById("btn");
button.addEventListener("click", function sendMail(e) {
  e.preventDefault();
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("description").value,
    company: document.getElementById("company").value,
    phone: document.getElementById("phone").value,
  };

  const serviceID = "service_jzd7hve";
  const templateID = "template_yxhtkk9";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("description").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("company").value = "";
      console.log(res);
      alert("Your message was sent successfully");
    })
    .catch((err) => console.log(err));
});
