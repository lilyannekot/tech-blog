const router = require("express").Router();
const { Post, Comment, User } = requrie("../models");

// GET all posts
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

// Get a single post
router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  }).then(
    ((postData) => {
      if (postData) {
        const post = postData.get({ plain: true });

        res.render("singlePost", { post });
      } else {
        res.status(404).end();
      }
    }).catch((err) => {
      res.status(500).json(err);
    })
  );
});

// Send user to homepage when logged in
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Send user to homepage after signing up
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
