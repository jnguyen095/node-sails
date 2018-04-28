/**
 * Profile.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'sailsMongoDBServer',
  attributes: {

    userid:{
      model: 'user'
    },
    firstname:{
      type: 'string'
    },
    lastname:{
      type: 'string'
    },
    gender:{
      type: 'string'
    },
    dob:{
      type: 'string',
      columnType: 'date'
    },
    address:{
      type: 'text'
    }

  },

};

