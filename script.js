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

function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);

  fullName.textContent = data.name;
  sub.textContent = data.sub;
  given_name.textContent = data.given_name;
  family_name.textContent = data.family_name;
  email.textContent = data.email;
  verified_email.textContent = data.verified_email;
  picture.setAttribute("src", data.picture);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "223772553314-978c5q3in5djtch7u0s1d4fdhukco7cn.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
      theme: "filled_black",
      size: "large",
      type: "standard",
      shape: "pill",
      text: "signin_with",
      locale: "en-US",
      logo_alignment: "left",
    } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};
