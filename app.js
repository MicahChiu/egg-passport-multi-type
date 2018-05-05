'use strict';
 
const LocalStrategy = require('passport-multi-type');

module.exports = app => {
  const config = app.config.passportMultiType;
  config.passReqToCallback = true;
  app.passport.use(new LocalStrategy(config, (req,type, username, password, done) => {
    // format user
    const user = {
      provider: 'local',
      type,
      username,
      password,
    }; 
    app.passport.doVerify(req, user, done);
  }));
};
