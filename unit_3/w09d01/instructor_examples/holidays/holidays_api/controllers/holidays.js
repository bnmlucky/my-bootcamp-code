const express = require('express');
const holidays = express.Router();
const Holiday = require('../models/holidays.js');

holidays.get('/', (req, res) => {
  Holiday.find({}, (error, foundHoliday) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(foundHoliday);
  });
});

holidays.post('/', (req, res) => {
  Holiday.create(req.body, (error, createdHoliday) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdHoliday);
  });
});

holidays.delete('/:id', (req, res) => {
  Holiday.findByIdAndRemove(req.params.id, (error, deletedHoliday) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(deletedHoliday);
  });
});

holidays.put('/:id', (req, res) => {
  Holiday.findByIdAndUpdate(
    req.params.id,
    req.body,
    (error, updatedHoliday) => {
      if (error) {
        res.status(400).json({ error: error.message });
      }
      res.status(200).json(updatedHoliday);
    }
  );
});

module.exports = holidays;
