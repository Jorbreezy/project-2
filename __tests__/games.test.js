import supertest from 'supertest';

import app from '../server/index';

const request = supertest(app);

describe('Test Games Endpoints GOOD', () => {
  const endpoint = '/api/games';

  const mockResponse = [
    { id: 1, title: 'Dark Souls', price: 40, maker: 'Bluepoint', type: 'RPG' },
    { id: 2, title: 'Dark Souls 2', price: 40, maker: 'Bluepoint', type: 'RPG' },
    { id: 3, title: 'Black Ops 3', price: 40, maker: 'Treyarch', type: 'FPS' },
    { id: 4, title: 'Cold War', price: 60, maker: 'Treyarch', type: 'FPS' },
    { id: 5, title: 'Spider Man Miles Morales', price: 70, maker: 'Insomniac Games', type: 'Action' },
    { id: 6, title: 'Spider Man', price: 60, maker: 'Insomniac Games', type: 'Action' },
  ]
  
  it('Should return status 200', async () => {
    const res = await request.get(endpoint);

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockResponse);
  });

  it('Should create a new game', async () => {
    const res = await request
      .post(endpoint)
      .send({
        title: 'Black Ops',
        maker: 2,
        type: 2,
        price: 20
      });

      console.log(res);

      expect(res.status).toBe(200);
      expect(res.text).toBe('Created Successfully');
  });

  //xit('Should return object of games', async () => {
  //  const res = await request.get(endpoint);
  //  const expectedData = {
  //    '0': {
  //      title: 'Cold War',
  //      maker: '0',
  //      type: 'FPS',
  //      price: 60
  //    }
  //  }

  //  expect(res.body).toEqual(expectedData)
  //});

  //xit('Should get data by id', async () => {
  //  await request
  //    .post(endpoint)
  //    .send({
  //      title: 'Dark Souls Remastered',
  //      maker: 'FromSoft',
  //      type: 'RPG',
  //      price: 40
  //    });

  //  const expectedData = { 
  //    title: 'Dark Souls Remastered',
  //    maker: '1',
  //    type: 'RPG',
  //    price: 40
  //  }

  //  const id = 1;

  //  const res = await request.get(`/api/games/${id}`);

  //  expect(res.body).toEqual(expectedData);
  //});

  //xit('Should update successfully', async () => {
  //  const res = await request
  //    .patch(`${endpoint}/1`)
  //    .send({
  //      title: 'Demon Souls'
  //    })

  //  expect(res.status).toBe(200);
  //  expect(res.text).toBe('Update Successful');
  //});

  //xit('Should delete successfully', async () => {
  //  const res = await request
  //    .delete(`${endpoint}/0`);

  //  const response = await request
  //    .get('/api/games')

  //  const expectedData = {
  //    "1": {
  //      title: "Demon Souls",
  //      maker: "1",
  //      type: "RPG",
  //      price: 40
  //    }
  //  }

  //  expect(res.text).toBe('Delete Successful');
  //  expect(response.body).toEqual(expectedData);
  //});

  afterAll(done => {
    done();
  });

});

//xdescribe('Testing games endpoints BAD', () => {
//  const endpoint = '/api/games';

//  xit('Should return status 406', async () => {
//    const res = await request
//      .post(endpoint)
//      .send({
//        title: 'Demon Souls',
//        maker: 'Bluepoint',
//        type: 'RPG',
//        price: 40
//      });

//    expect(res.status).toBe(406);
//    expect(res.text).toBe('Game already exists!');
//  }); 

//  xit('Should return status 400', async () => {
//    const res = await request
//      .post(endpoint)
//      .send({
//        title: 'Demon',
//        maker: 23,
//        type: 'RPG',
//        price: '40'
//      });

//    expect(res.status).toBe(500);
//  });

//});