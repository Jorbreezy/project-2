import path from 'path';

import dotenv from 'dotenv';

import express from 'express';

import games from './routes/games';
import makers from './routes/maker';
import errorHandler from '../utils/errorHandler';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

app.use(express.json());
app.use('/api', games, makers);

app.use(errorHandler);

export default app;
