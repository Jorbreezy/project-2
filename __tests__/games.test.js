import supertest from 'supertest';

import knex from '../server/db/db';
import app from '../server/index';

const request = supertest(app);

describe('Test Games Endpoints', () => {
  const endpoint = '/api/games';

  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  afterAll(async (done) => {
    await knex.destroy();
    done();
  });

  it('Should post game and return with 201', async () => {
    const res = await request
      .post(endpoint)
      .send({
        title: 'Bloodborne',
        maker: 1,
        type: 1,
        price: 60,
      });

    expect(res.status).toBe(201);
    expect(res.text).toBe('Created Successfully');
  });

  it('Should fetch a single game', async () => {
    const res = await request.get(`${endpoint}/1`);

    const expectedData = {
      id: 1,
      title: 'Dark Souls',
      price: 40,
      maker: 'FromSoft',
      type: 'RPG',
    };

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expectedData);
  });

  it('Should fetch all games', async () => {
    const res = await request.get(endpoint);

    const expectedData = [
      {
        id: 1, title: 'Dark Souls', price: 40, maker: 'FromSoft', type: 'RPG',
      },
      {
        id: 2, title: 'Dark Souls 2', price: 40, maker: 'FromSoft', type: 'RPG',
      },
      {
        id: 3, title: 'Black Ops 3', price: 40, maker: 'Treyarch', type: 'FPS',
      },
      {
        id: 4, title: 'Cold War', price: 60, maker: 'Treyarch', type: 'FPS',
      },
      {
        id: 5, title: 'Spider Man Miles Morales', price: 70, maker: 'Insomniac Games', type: 'Action',
      },
      {
        id: 6, title: 'Spider Man', price: 60, maker: 'Insomniac Games', type: 'Action',
      },
      {
        id: 7, title: 'Bloodborne', price: 60, maker: 'FromSoft', type: 'RPG',
      },
    ];

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expectedData);
  });

  it('Should return StatusCode 500', async () => {
    const res = await request
      .post(endpoint)
      .send({
        title: 'Bloodborne',
        maker: 1,
        type: 1,
        price: 60,
      });

    expect(res.statusCode).toBe(500);
  });

  it('Should delete a game', async () => {
    const res = await request.delete(`${endpoint}/7`);

    expect(res.statusCode).toBe(204);
  });

  it('Should respond with 404 not found', async () => {
    const res = await request.get(`${endpoint}/7`);

    expect(res.statusCode).toBe(404);
  });
});
