const express = require("express");
const { createEvent, addParticipant, getEvents } = require("../controllers/eventControllerNoPhoto");

const router = express.Router();

router.post("/events", createEvent);
router.post("/events/:eventId/participants", addParticipant);
router.get("/events", getEvents);

module.exports = router;
