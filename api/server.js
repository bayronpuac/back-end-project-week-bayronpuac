const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const db = require('./notes-model');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


//Getting any exsiting Notes
server.get('/api/notes', (req, res) => {
    db
    .get()
    .then( notes => {
        res.status(200).json(notes)
    })
    .catch(() => {
        res.status(500).json({ errorMessage: "The notes list could not re retrieved."})
    })
})

server.get('/api/notes/:id', (req, res) => {
	db
    .getById(req.params.id)
    .then( notes => {
        res.status(200).json(notes)
    })
    .catch(() => {
        res.status(500).json({ errorMessage: "The notes list could not re retrieved."})
    })
});
server.post('/api/notes/', (req, res) => {
	db
		.insert(req.body)
		.then( notes => {
            res.status(200).json(notes)
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "The notes was not added."})
        })
});

server.put('/api/notes/:id', (req, res) => {
	db
		.update(req.body, req.params.id)
		.then( notes => {
            res.status(202).json(notes)
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "The notes was not added."})
        })
});

server.delete('/api/notes/:id', (req, res) => {
	db
		.remove(req.params.id)
		.then( notes => {
            res.status(200).json(notes)
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "The note was not deleted."})
        })
});
  module.exports = server;