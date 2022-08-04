const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector("#post-title");
  const body = document.querySelector("#post-body");
  const postId = document.querySelector("#post-id");

  await fetch("/api/post/" + postId.value, {
    method: "PUT",
    body: JSON.stringify({
      title: title.value,
      body: body.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function () {
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
};

document
  .querySelector("#editPost-form")
  .addEventListener("submit", editFormHandler);
