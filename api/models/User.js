/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'sailsMongoDBServer',

  attributes: {

    username:{
      type: 'string'
    },
    email:{
      type: 'string'
    },
    password:{
      type: 'string'
    }

  },

};

