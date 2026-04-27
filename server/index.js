const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Agent Mirror Core API' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
