// mouse hover
const heading = document.getElementById("heading")
heading.onmouseover = function (){
    heading.style.color = "red"
    heading.style.fontSize = "20px"
}
// button
const message = document.getElementById("message")
const btn = document.getElementById("btn")
btn.onclick = function (){
    if(message.style.display==="none"){
        message.style.display="block";
        btn.textContent = "Hide Text";

        }

    else{
        message.style.display = "none";
        btn.textContent = "Show Text";
    }
};
// double key
const doubleClick = document.getElementById("doubleClick")
doubleClick.addEventListener("dblclick", () => {
    doubleClick.textContent ="Secret action triggered!"
});
// passkey

const inputBox = document.getElementById("inputBox");
inputBox.addEventListener("keypress", (e) =>{
    alert(`You pressed: ${e.key}`);

});
// interactive elements
const magicBtn = document.getElementById("magicBtn");

  magicBtn.addEventListener("click", () => {
    magicBtn.textContent = "Changed!";
    magicBtn.style.backgroundColor = "purple";
    magicBtn.style.color = "white";
  });
  const images = [
    "images/image2.jpg",
    "images/image3.jpg",
    "images/images5.jpg"
  ];
  let index = 0;

  function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById("galleryImg").src = images[index];
  };
  function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  } ;
  const toggleBtn = document.getElementById("toggleBtn");
  const animateBox = document.getElementById("animateBox");

  toggleBtn.addEventListener("click", () => {
    animateBox.classList.toggle("show");
  });
  const form = document.getElementById("forms");
  const nameInput = document.getElementById("names");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailAlert = document.getElementById("emailAlert");
  const passAlert = document.getElementById("passAlert");

  form.addEventListener("submit", (e) => {
    let isValid = true;

    // Clear old messages
    emailAlert.textContent = "";
    passAlert.textContent = "";

    // Name required
    if (nameInput.value.trim() === "") {
      alert("Name is required");
      isValid = false;
    }

    // Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
      emailAlert.textContent = "Enter a valid email (e.g., test@example.com)";
      isValid = false;
    }

    // Password length check
    if (passwordInput.value.length < 8) {
      passAlert.textContent = "Password must be at least 8 characters.";
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); // Prevent form submission
    }
  });

  // Bonus: Real-time feedback
  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 8) {
      passAlert.textContent = "Password too short!";
    } else {
      passAlert.textContent = "✅ Strong enough!";
      passAlert.style.color = "green";
    }
  });

  emailInput.addEventListener("input", () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
      emailAlert.textContent = "Invalid email format";
      emailAlert.style.color = "red";
    } else {
      emailAlert.textContent = "✅ Valid email";
      emailAlert.style.color = "green";
    }
  });


  
  
