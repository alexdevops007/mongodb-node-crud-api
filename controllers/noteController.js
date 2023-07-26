const { client, db } = require("../config/dbConfig");
const notes = client.db("notesdb").collection("notes");
const { v4: uuidv4 } = require("uuid");

const insertNote = async (req, res, next) => {};

const readNoteById = async (req, res, next) => {};

const readAllNotes = async (req, res, next) => {};

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
    readNotesByStatus
}