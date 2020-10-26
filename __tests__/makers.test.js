//import supertest from 'supertest';

//import app from '../server/index';

//const request = supertest(app);

it('Test', () => {
  
})

//describe('Test Makers Endpoints GOOD', () => {
//  const endpoint = '/api/makers';

  
//  it('Should return status 200', async () => {
//    const res = await request.get(endpoint);

//    expect(res.status).toBe(200);
//    expect(res.body).toEqual({});
//  });

//  it('Should create a new maker', async () => {
//    const res = await request
//      .post(endpoint)
//      .send({
//        name: 'FromSoft'
//      });

//      expect(res.status).toBe(200);
//      expect(res.text).toBe('Created Successfully');
//  });

//  it('Should return object of makers', async () => {
//    const res = await request.get(endpoint);

//    const expectedData = {
//      '0':'FromSoft'
//    }
    
//    expect(res.body).toEqual(expectedData)
//  });

//  it('Should get data by id', async () => {
//    await request
//      .post(endpoint)
//      .send({ name: 'Treyarch' });

//    const expectedData = 'Treyarch'

//    const id = 1;

//    const res = await request.get(`${endpoint}/${id}`);

//    expect(res.body).toEqual(expectedData);
//  });

//  it('Should update successfully', async () => {
//    const res = await request
//      .patch(`${endpoint}/1`)
//      .send({
//        name: 'Bluepoint'
//      })

//    expect(res.status).toBe(200);
//    expect(res.text).toBe('Update Successful');
//  });

//  it('Should delete successfully', async () => {
//    const res = await request
//      .delete(`${endpoint}/0`);

//    const response = await request
//      .get(endpoint)

//    const expectedData = {
//      "1": "Bluepoint"
//    }

//    expect(res.text).toBe('Delete Successful');
//    expect(response.body).toEqual(expectedData);
//  });

//  afterAll(done => {
//    done();
//  });

//});

//describe('Testing games endpoints BAD', () => {
//  const endpoint = '/api/makers';

//  it('Should return status 406', async () => {
//    const res = await request
//      .post(endpoint)
//      .send({
//       name: 'Bluepoint'
//      });

//    expect(res.status).toBe(406);
//    expect(res.text).toBe('Maker already exists!');
//  }); 

//  it('Should return status 400', async () => {
//    const res = await request
//      .post(endpoint)
//      .send({
//        name: 123
//      });

//      expect(res.status).toBe(400);
//  });

//  afterAll(done => {
//    done();
//  })

//});