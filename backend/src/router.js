const express = require('express');

const router = express.Router();

router.get('/task', (req, res) => res.status(200).send('Router Ativo'));

module.exports = router;