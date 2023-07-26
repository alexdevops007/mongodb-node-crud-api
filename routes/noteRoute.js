const noteController = require("../controllers/noteController");
const router = require("express").Router();

router.post("/insertNote", noteController.insertNote);
router.get("/readAllNotes", noteController.readAllNotes);

module.exports = router;
