const express = require('express');
let router = express.Router();
const { GetLost } = require('../../models/get_lost_model');

router.route('/')
    .get(async (req, res) => {
        try {
            const clientIp = req.ipInfo;
            res.json({clientIp, message: 'get ip'});
        } catch (err) {
            console.log(err);
            res.json({ message: err, ip: '??' });
        }
    })
    .post(async (req, res) => {
        try {
            const data = req.body.data;
            console.log(data)
            const saveData = new GetLost(data);
            await saveData.save();

            res.status(200).send('Sent successfully');

        } catch (err) {
            console.log(err);
            res.json({ err });
        }
    })

module.exports = router;