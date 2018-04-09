const helloWorld = require('../controllers/helloWorld');

it('returns a Hello World object', () => {
  const request  = httpMocks.createRequest({
    method: 'GET',
    url: '/',
  });
  const response = httpMocks.createResponse();
});

