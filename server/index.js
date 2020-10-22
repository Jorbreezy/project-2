import express from 'express';

import api from './routes/api';

const app = express();
const PORT = 3000;

// USE
app.use(express.json())
app.use('/api', api);


// Default Error Handler 
app.use((err, req, res) => {
  console.error(err);
  return res.status(500).send('Error', { error: err });
});

app.listen(PORT, () => `Listening on port ${PORT}`);