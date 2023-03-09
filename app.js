const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm-password");
const form = document.getElementById("form");

const checkRequired = (item) => {
  item.forEach((itm) => {
    if (itm.value === "") {
      const formControl = itm.parentElement;
      formControl.className = "form-control error";
      const small = formControl.querySelector("small");
      small.innerText = `${itm.id} required`;
    } else {
      const formControl = itm.parentElement;
      formControl.className = "form-control success";
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
});
