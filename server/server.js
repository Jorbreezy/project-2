const { PORT, CLIENT } = process.env;

import app from './index';

 app.listen(PORT, () => `Listening on port ${PORT}`);