import supertest from 'supertest';

import app from '../server/index';

const request = supertest(app);

describe('Test Games Endpoints', () => {
  const endpoint = '/api/games';

  beforeAll(done => {
    done();
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
    expect(res.body).toHaveLength(7);
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

  it('Should delete a post', async () => {
    const res = await request.delete(endpoint + '/1');

    expect(res.statusCode).toBe(204);
  });

  it('Should respond with 404 not found', async () => {
    const res = await request.get(endpoint + '/1');

    expect(res.statusCode).toBe(404);
  })

  afterAll(done => {
    done();
  });

});