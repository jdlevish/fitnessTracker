const router = require("express").Router();
const workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    workout.find()

        .then(dbworkout => {
            console.log(dbworkout)
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.get("/api/workouts/range", (req, res) => {
    workout.find()
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})


router.put("/api/workouts/:id", (req, res) => {
    var id = req.params.id;
    workout.findByIdAndUpdate(
        id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true }
    )

        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    workout.create(req.body)
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});




module.exports = router;