const { postPredictHandler, getHistoriesHandler } = require('../server/handler');

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        maxBytes: 100000000,
        multipart: true,
        allow: 'multipart/form-data',
      },
    },
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: getHistoriesHandler,
  },
];

module.exports = routes;
