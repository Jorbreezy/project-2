import app from './index';

const { PORT } = process.env;

app.listen(PORT, () => `Listening on port ${PORT}`);
