const router = require("express").Router();
const Goals = require("../models/goals")

// //DELETE
router.delete("/:id", async (req, res) => {

    console.log(req.params.id)

    try {
    await Goals.findByIdAndDelete(req.params.id);
    res.status(200).json("This product has been deleted..");
    } catch (err) {
    res.status(500).json(err);
    }

});

module.exports = router;