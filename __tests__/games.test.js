import supertest from 'supertest';
import nock from 'nock';

import app from '../server/index';

const request = supertest(app);

describe('Test Games Endpoints', () => {
  const endpoint = '/api/games';

  it('Should return status 200', async () => {
    const res = await request.get(endpoint);

    expect(res.status).toBe(200);
  });

  it('Should get data by id and return status 200', async () => {
    const res = await request.get(endpoint + '/1');

    const expectedData = {
      "id": 1,
      "title": "Dark Souls",
      "price": 40,
      "type": "RPG",
      "maker": "FromSoft"
    };

    expect(res.status).toBe(200);
    expect(res.body).toEqual(expectedData);
  });

  afterAll(done => {
    done();
  });

});