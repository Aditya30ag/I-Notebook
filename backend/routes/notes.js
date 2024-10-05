const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes.js");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser.js");

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "enter the valid title").isLength({ min: 3 }),
    body("discription", "enter the valid discription").isLength({ min: 3 }),
  ],
  async (req, res) => {
    const { title, discription, tags } = req.body;

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    try {
      const notes = new Notes({
        title,
        discription,
        tags,
        user:req.user.id
      });
      const savenote = await notes.save();
      res.json(savenote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);
//to update a notes
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try{
    const { title, discription, tags } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (discription) {
      newNote.discription = discription;
    }
    if (tags) {
      newNote.tags = tags;
    }
    
    let notes = await Notes.findById( req.params.id );
    if (!notes) {
      return res.status(404).send("please use the correct credential" );
    }

    /*if (notes.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }*/


    notes = await Notes.findByIdAndUpdate(req.params.id,{ $set: newNote },{ new: true });
    res.json({notes});

  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});
//to delete a notes
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try{
    let notes = await Notes.findById( req.params.id );

    if (!notes) {
      return res.status(404).send("please use the correct credential" );
    }

    /*if (notes.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }*/
   
    notes = await Notes.findByIdAndDelete(req.params.id);
    res.json({"success":"the note has been deleted"});

  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});
module.exports=router;