import supertest from 'supertest';

import app from '../server/index';

const request = supertest(app);

describe('Test Makers Endpoints', () => {
  
  it('Should return status 200', async () => {
    const res = await request.get('/api/makers');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({});
  });

  it('Should create a new maker', async () => {
    const res = await request
      .post('/api/makers')
      .send({
        name: 'FromSoft'
      });

      expect(res.status).toBe(200);
      expect(res.text).toBe('Created Successfully');
  });

  it('Should return object of makers', async () => {
    const res = await request.get('/api/makers');

    const expectedData = {
      '0':'FromSoft'
    }
    
    expect(res.body).toEqual(expectedData)
  });

  it('Should get data by id', async () => {
    await request
      .post('/api/makers')
      .send({ name: 'Treyarch' });

    const expectedData = 'Treyarch'

    const id = 1;

    const res = await request.get(`/api/makers/${id}`);

    expect(res.body).toEqual(expectedData);
  });

  it('Should update successfully', async () => {
    const res = await request
      .patch('/api/makers/1')
      .send({
        name: 'Bluepoint'
      })

    expect(res.status).toBe(200);
    expect(res.text).toBe('Update Successful');
  });

  it('Should delete successfully', async () => {
    const res = await request
      .delete('/api/makers/0');

    const response = await request
      .get('/api/makers')

    const expectedData = {
      "1": "Bluepoint"
    }

    expect(res.text).toBe('Delete Successful');
    expect(response.body).toEqual(expectedData);
  });

  afterAll(done => {
    done();
  });

});