const commentFormHandler = async function (event) {
  event.preventDefault();

  const postId = document.querySelector("input[name = 'post-id']").value;
  const body = document.querySelector("textarea[name = 'comment-body']").value;

  if (body) {
    await fetch("/api/comment", {
      method: "post",
      body: JSON.stringify({
        postId,
        body,
      }),
      headers: { "Content-Type": "application/json" },
    });

    document.location.reload();
  }
};

document
  .querySelector("#comment-form")
  .addEventListener("submit", commentFormHandler);
