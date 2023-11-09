const express = require('express');
let router = express.Router();
const { GetLost } = require('../../models/get_lost_model');

router.route('/')
    .get(async (req, res) => {
        try {
            const showData = await GetLost.find({});
            res.json(showData);
        } catch (err) {
            console.log(err);
            res.json({ message: err });
        }
    })


module.exports = router;