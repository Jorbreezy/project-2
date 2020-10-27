import supertest from 'supertest';

import knex from '../server/db/db';
import app from '../server/index';

const request = supertest(app);

describe('Test Games Endpoints', () => {
  const endpoint = '/api/games';

  beforeAll(async () => {
    return await knex.migrate.latest()
    .then(() => knex.seed.run());
  });

  afterAll(async () => {
    return await knex.migrate.rollback()
    .then(() => knex.destroy());
  });

  it('Should post game and return with 201', async () => {
    const res = await request
      .post(endpoint)
      .send({
        title: 'Bloodborne',
        maker: 1,
        type: 1,
        price: 60
      });

    expect(res.status).toBe(201);
    expect(res.text).toBe('Created Successfully');
  });

  it ('Should fetch a single game', async () => {
    const res = await request.get(endpoint + '/1');

    expect(res.statusCode).toBe(200);
  });

  it ('Should fetch all games', async () => {
    const res = await request.get(endpoint);

    expect(res.statusCode).toBe(200);
  }); 

  it('Should return StatusCode 500', async () => {
    const res = await request
      .post(endpoint)
      .send({
        title: 'Bloodborne',
        maker: 1,
        type: 1,
        price: 60
      });

    expect(res.statusCode).toBe(500);
  });

  it('Should delete a game', async () => {
    const res = await request.delete(endpoint + '/7');

    expect(res.statusCode).toBe(204);
  });

  it('Should respond with 404 not found', async () => {
    const res = await request.get(endpoint + '/7');

    expect(res.statusCode).toBe(404);
  });

});