const noteController = require("../controllers/noteController");
const router = require("express").Router();

router.post("/insertNote", noteController.insertNote)

module.exports = router;