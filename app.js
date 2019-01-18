const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const path = require('path');
var bodyParser = require('body-parser');

const urlPreviewRoutes = require('./urlPreview/routes');
app.get('/', (req, res) => res.send('Hello World!'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/urlpreview', urlPreviewRoutes);

app.listen(port, () => console.log(`Message-builder listening on port ${port}!`))

module.exports = app;