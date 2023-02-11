const router = require("express").Router();
const Goals = require("../models/goals")

// //UPDATE
router.put("/:id", async (req, res) => {

    try {
    const updatedCart = await Goals.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        { new: true }
    );
    res.status(200).json(updatedCart);
    } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;
