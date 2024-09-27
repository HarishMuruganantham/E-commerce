let navlinks = document.getElementById("navlinks")

function openMenu() {
       navlinks.style.right = "0px"
       navlinks.style.display = "block"
}

function closemMenu() {
       navlinks.style.display = "none"
}


let orderCount = 0;
let btns = document.querySelectorAll(".btn");
btns.forEach(button => {
       button.addEventListener("click", () => {
              orderCount++;
              let notification = document.getElementById("notification");
              notification.textContent = orderCount;

       });
});


orderCount = 0;
btns = document.querySelectorAll(".bto");
btns.forEach(button => {
       button.addEventListener("click", () => {
              orderCount--;
              let notification = document.getElementById("notification");
              notification.textContent = orderCount;

       });
});



// ----------------------- order


//  selecting Elements for show popupbox

let clickbtn = document.getElementById("addbtn");
let popupoverlay = document.querySelector(".popupoverlay");
let popupbox = document.querySelector(".popupbox");
clickbtn.addEventListener("click", () => {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

//  selecting Elemnts for Cancel button

let can = document.getElementById("cancel");
can.addEventListener("click", (event) => {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// selecting Elements for Add button

let bookname = document.getElementById("bookname");
let authorname = document.getElementById("authorname");
let description = document.getElementById("description");

let container = document.querySelector(".container")
let add = document.getElementById("add");
add.addEventListener("click", (x) => {
    x.preventDefault()
    let div = document.createElement("div")
    div.setAttribute("class", "box");
    div.innerHTML = `<h2>${bookname.value}</h2>
    <h3>${authorname.value}</h3> 
    <p>${description.value}</p>
    <button onclick="deletebox(event)">Delete</button>`


    container.append(div)
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    document.getElementById("bookname").value = " ";
    document.getElementById("authorname").value = " "; 
    document.getElementById("description").value = " ";


});

function deletebox(event) {
    event.target.parentElement.remove();

}


//  form validation   //


const form = document.getElementById('myForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let errors = [];

  // Name validation
  if (name === '') {
    errors.push('Name is required');
  }

  // Email validation
  if (!validateEmail(email)) {
    errors.push('Invalid email address');
  }

  // Password validation
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  // Display error messages
  errorMessages.innerHTML = '';
  errors.forEach((error) => {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = error;
    errorMessages.appendChild(errorDiv);
  });

  // If no errors, submit form
  if (errors.length === 0) {
    form.submit();
  }
});



















