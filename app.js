'use strict';

const debug = require('debug')('egg-passport-local');
const LocalStrategy = require('passport-multi-type').Strategy;

module.exports = app => {
  const config = app.config.passportLocal;
  config.passReqToCallback = true;

  app.passport.use(new LocalStrategy(config, (req,type, username, password, done) => {
    // format user
    const user = {
      provider: 'local',
      type,
      username,
      password,
    };
    debug('%s %s get user: %j', req.method, req.url, user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
