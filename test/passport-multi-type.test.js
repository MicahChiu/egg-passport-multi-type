'use strict';

const mock = require('egg-mock');

describe('test/passport-multi-type.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/passport-multi-type-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, passportMultiType')
      .expect(200);
  });
});
