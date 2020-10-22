import express from 'express';

import api from './routes/api';

const app = express();
const PORT = 3000;

// USE
app.use(express.json())
app.use('/api', api);

app.listen(PORT, () => `Listening on port ${PORT}`);