const Event = require('../models/Event');
const eventFactory = require('../factories').createEvent;

const getEvents = (req, res, next) =>{
  Event.find().then((events) => {
    if (events != null) {
      res.status(200).json('No events found');
    } else {
      res.status(200).send(events);
    }
  }).catch((err) => {
    res.status(400).send({
      message: 'Error in getting all events',
      err: err,
    });
  });
};

const getEventById = async (req, res, next) => {
  const id = req.params.id;
  const event = await Event.findById(id);
  res.status(200).send(event);
};

const postEvent = async (req, res, next) => {
  const eventData = await eventFactory(req.body);
  const event = await new Event(eventData);
  const eventSaveResult = await event.save();
  res.status(200).send(eventSaveResult);
};

module.exports = {getEvents, getEventById, postEvent};
