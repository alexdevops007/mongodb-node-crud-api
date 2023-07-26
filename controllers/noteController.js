const { client, db } = require("../config/dbConfig");
const notes = client.db("notesdb").collection("notes");
const { v4: uuidv4 } = require("uuid");

const insertNote = async (req, res, next) => {
  const { title, content, tag, isCompleted } = req.body;

  let data = {
    _id: `RDC-${uuidv4()}`,
    title: title,
    content: content,
    tag: tag,
    isCompleted: isCompleted,
    created_at: new Date(),
    updated_at: new Date(),
  };

  const insertRecord = await notes.insertOne(data);

  res.status(200).json({
    statusCode: 200,
    status: "success",
    message: "New note inserted successfully",
    insertRecord: insertRecord,
  });
};

const readNoteById = async (req, res, next) => {};

const readAllNotes = async (req, res, next) => {
  const allNotes = await notes.find({}).toArray();

  res.status(200).json({
    statusCode: 200,
    status: "success",
    message: "All Notes Fetched successfully",
    totalNotes: allNotes.length,
    notes: allNotes,
  });
};

const deleteNoteById = async (req, res, next) => {};

const updateNoteById = async (req, res, next) => {};

const deleteAllNotes = async (req, res, next) => {};

const readNotesByTag = async (req, res, next) => {};

const readNotesByStatus = async (req, res, next) => {};

module.exports = {
  insertNote,
  readNoteById,
  readAllNotes,
  deleteNoteById,
  updateNoteById,
  deleteAllNotes,
  readNotesByTag,
  readNotesByStatus,
};
