import path from 'path';

import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../.env')});

import express from 'express';

import games from './routes/games';
import makers from './routes/maker';
import errorHandler from '../utils/errorHandler';

const app = express();

// USE
app.use(express.json())
app.use('/api', games, makers);

// Default Error Handler
app.use(errorHandler);

export default app;