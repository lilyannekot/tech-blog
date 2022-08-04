const router = require("express").Router();

const userRoutes = require("./api/userRoutes.js");
const postRoutes = require("./api/postRoutes.js");
const commentRoutes = require("./api/commentRoutes.js");

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
