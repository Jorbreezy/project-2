import supertest from 'supertest';

import app from '../server/index';

const request = supertest(app);

describe('Test Games Endpoints GOOD', () => {
  const endpoint = '/api/games'
  
  it('Should return status 200', async () => {
    const res = await request.get(endpoint);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({});
  });

  it('Should create a new game', async () => {
    const res = await request
      .post(endpoint)
      .send({
        title: 'Cold War',
        maker: 'Treyarch',
        type: 'FPS',
        price: 60
      });

      expect(res.status).toBe(200);
      expect(res.text).toBe('Created Successfully');
  });

  it('Should return object of games', async () => {
    const res = await request.get(endpoint);
    const expectedData = {
      '0': {
        title: 'Cold War',
        maker: '0',
        type: 'FPS',
        price: 60
      }
    }

    expect(res.body).toEqual(expectedData)
  });

  it('Should get data by id', async () => {
    await request
      .post(endpoint)
      .send({
        title: 'Dark Souls Remastered',
        maker: 'FromSoft',
        type: 'RPG',
        price: 40
      });

    const expectedData = { 
      title: 'Dark Souls Remastered',
      maker: '1',
      type: 'RPG',
      price: 40
    }

    const id = 1;

    const res = await request.get(`/api/games/${id}`);

    expect(res.body).toEqual(expectedData);
  });

  it('Should update successfully', async () => {
    const res = await request
      .patch(`${endpoint}/1`)
      .send({
        title: 'Demon Souls'
      })

    expect(res.status).toBe(200);
    expect(res.text).toBe('Update Successful');
  });

  it('Should delete successfully', async () => {
    const res = await request
      .delete(`${endpoint}/0`);

    const response = await request
      .get('/api/games')

    const expectedData = {
      "1": {
        title: "Demon Souls",
        maker: "1",
        type: "RPG",
        price: 40
      }
    }

    expect(res.text).toBe('Delete Successful');
    expect(response.body).toEqual(expectedData);
  });

  afterAll(done => {
    done();
  });

});

describe('Testing games endpoints BAD', () => {
  const endpoint = '/api/games';

  it('Should return status 406', async () => {
    const res = await request
      .post(endpoint)
      .send({
        title: 'Demon Souls',
        maker: 'Bluepoint',
        type: 'RPG',
        price: 40
      });

    expect(res.status).toBe(406);
    expect(res.text).toBe('Game already exists!');
  }); 

  it('Should return status 400', async () => {
    const res = await request
      .post(endpoint)
      .send({
        title: 'Demon',
        maker: 23,
        type: 'RPG',
        price: '40'
      });

      expect(res.status).toBe(400);
  });

});