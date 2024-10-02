const express = require('express');

let app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log('Server listening on http://localhost:' + `${PORT}`)
})