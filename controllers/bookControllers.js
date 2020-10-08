const db = require("../models");

// everything in this file is wrapped in the module.export function
module.exports = {
    // create function takes in the request infomation and sends it to the mongoose database
    create: (req, res) => {
        db.Book.create(req.body)
        .then(bookModel => res.json(bookModel))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        });
    },
    // FindAll queries the mongoose database and returns it to the res.json
    findAll: (req, res) => {
        db.Book
        .find(req.query)
        .sort({ date: -1 })
        .then(bookModel => res.json(bookModel))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        });
    },
    // Delete takes in the request parameter's id and uses that id to delete an entry for the database
    delete: (req, res) => {
        db.Book
        .findById({ _id: req.params.id })
        .then(deletedBook => deletedBook.remove())
        .then(deletedBook => res.json(deletedBook))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        })
    }
}