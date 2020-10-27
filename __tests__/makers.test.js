import supertest from 'supertest';

import knex from '../server/db/db';
import app from '../server/index';

const request = supertest(app);

describe('Test Makers endpoints', () => {
  const endpoint = '/api/makers';

  beforeAll(async () => {
    return await knex.migrate.latest()
    .then(() => knex.seed.run());
  });

  afterAll(async () => {
    return await knex.migrate.rollback()
    .then(() => knex.destroy());
  });

  it('Should post maker and return with 201', async () => {
    const res = await request
      .post(endpoint)
      .send({
        name: 'Santa Monica'
      });

    expect(res.status).toBe(201);
    expect(res.text).toBe('Created Successfully');
  });

  it ('Should fetch a single maker', async () => {
    const res = await request.get(endpoint + '/4');

    const expectedData = {
      id: 4,
      name: 'Santa Monica'
    }

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expectedData);
  });

  it ('Should fetch all makers', async () => {
    const res = await request.get(endpoint);

    const expectedData = [
      { id: 1, name: 'FromSoft' },
      { id: 2, name: 'Treyarch' },
      { id: 3, name: 'Insomniac Games' },
      { id: 4, name: 'Santa Monica' }
    ];
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expectedData);
  }); 

  it('Should return StatusCode 500', async () => {
    const res = await request
      .post(endpoint)
      .send({
        title: 'Santa Monica',
      });

    expect(res.statusCode).toBe(500);
  });

  it('Should delete a maker', async () => {
    const res = await request.delete(endpoint + '/4');

    expect(res.statusCode).toBe(204);
  });

  it('Should respond with 404 not found', async () => {
    const res = await request.get(endpoint + '/4');

    console.log(res.body);

    expect(res.statusCode).toBe(404);
  });

});