const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.workout.find({})

        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    var id = req.params.id;
    db.workout.updateOne({
        _id: id
    },
        {
            $set: req.body

        })

        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    db.workout.create(req.body)
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});




module.exports = router;