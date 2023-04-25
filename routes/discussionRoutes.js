const express = require("express");

const { getalldiscussion, creatediscussion, deletediscussion } = require("../controllers/discussionControllers");

const router = express.Router();

router.get("/", getalldiscussion);
router.post("/create", creatediscussion);
router.post("/delete/:id",deletediscussion )

module.exports = router;