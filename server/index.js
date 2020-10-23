import express from 'express';

import games from './routes/games';
import makers from './routes/maker';

const app = express();
const PORT = 3000;

// USE
app.use(express.json())
app.use('/api', games, makers);


// Default Error Handler 
app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).send('Internal Server Error')
});

app.listen(PORT, () => `Listening on port ${PORT}`);