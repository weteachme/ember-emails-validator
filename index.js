/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-emails-validator',
  included: function(app) {
    this._super.included.apply(this, arguments);
    return app;
  }
};
