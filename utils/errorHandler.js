export default async (err, req, res, fn) => {
  const { code } = err;
  console.error('Error: ', code);
  if (code) {
    const codeStatusMap = {
      BAD_REQUEST: 400,
      NOT_FOUND: 404,
      MISCONFIGURATION: 500,
      COMMUNICATION_ERROR: 500,
    };

    const httpStatusCode = codeStatusMap[code];
    return res.status(httpStatusCode || 500).send({ error: err.message || 'Something unexpected happened.' });
  }
  console.error('UNEXPECTED ERROR:');
  return res.status(500).send({ error: { message: 'Internal Server Error' } });
};
