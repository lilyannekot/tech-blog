const signupFormHandler = async function (event) {
  event.preventDefault;

  const username = document.querySelector("#login-username");
  const password = document.querySelector("#login-password");

  fetch("/api/user/", {
    method: "post",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", loginFormHandler);
