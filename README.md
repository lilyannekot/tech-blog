# Tech Blog

## Project Description

This project entailed creating a [CMS-style blog](https://morning-inlet-30345.herokuapp.com/) that allows users to publish blog posts and comment on others' posts.

## Table of Contents

- [Languages and Technology Used](#languages-and-technology-used)
- [Project Demonstration](#project-demonstration)
- [Code Snippet](#code-snippet)
- [Author Links](#author-links)

## Languages and Technology Used

- JavaScript
- SQL
- CSS
- Handlebars

## Project Demonstration

The following gif demonstrates...

![All Get Routes](assets/demos/GET-all.gif)

## Code Snippet

The code below displays a GET route that returns all blog posts on the homepage.

```
router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render("allPosts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
```

## Author Links

- [GitHub](https://github.com/lilyannekot)
- [LinkedIn](https://www.linkedin.com/in/lilykot/)
- [Deployed Link](https://morning-inlet-30345.herokuapp.com/)
