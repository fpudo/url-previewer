var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

// Import controllers
const ctrlUrlPreview = require('./controller');

router.get('/', ctrlUrlPreview.getPreview, (req, res, next) => { res.json(req.contentReturn)});

module.exports = router;
