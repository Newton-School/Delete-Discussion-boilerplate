const express = require("express");

const { getAllDiscussion, createDiscussion, deleteDiscussion } = require("../controllers/discussionControllers");

const router = express.Router();

router.get("/", getAllDiscussion);
router.post("/create", createDiscussion);
router.delete("/delete/:id",deleteDiscussion )

module.exports = router;
