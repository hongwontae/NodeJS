const express = require("express");

const PostController = require("../controller/PostController");
const IsAuth = require("../util/IsAuth");
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/item",
  IsAuth,
  [
    body("title").isLength({ min: 5 }).withMessage("5글자 이상 필요"),
  ],
  PostController.postItem
);

module.exports = router;
