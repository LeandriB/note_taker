const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');

app.use('/', routes);
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
});