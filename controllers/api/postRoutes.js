const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../..utils/auth.js");

// Create a new post
router.post("/", withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);
  Post.create({ ...body, userId: req.session.userId })
    .then((newBlog) => {
      res.json(newBlog);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Update existing post
router.put("/:id", withAuth, (req, res) => {
  console.log(req.body, req.params.id);
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((rowsAffected) => {
      if (rowsAffected > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Delete existing post
router.delete("/:id", withAuth, (req, res) => {
  console.log(req.body, req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((rowsAffected) => {
      if (rowsAffected > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
