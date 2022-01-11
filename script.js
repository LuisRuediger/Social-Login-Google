const buttonSubmit = document.querySelector(".button-login");
const form = document.querySelector("form");

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")];

  fields.forEach((field) => {
    if (field.value === "") form.classList.add("validate-error");
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", (event) => {
      if (event.animationName === "error") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }
});

form.addEventListener("animationstart", (event) => {
  if (event.animationName === "hide") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", (event) => {
  if (event.animationName === "hide") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});
