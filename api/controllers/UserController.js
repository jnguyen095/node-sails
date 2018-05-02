/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: function (req, res) {
    //console.log("Inside create..............req.params = " + JSON.stringify(req.params()));
    var _newUser = {
      username: req.param("username"),
      email: req.param("email"),
      password: req.param("password")
    };

    return User.create(_newUser).then(function (_user) {
      console.log("User created: " + JSON.stringify(_user));
      return res.redirect("/user");
    }).catch(function (err) {
      console.error(err);
      console.error(JSON.stringify(err));
      return res.view("/user/new", {
        contact: _user,
        status: 'Error',
        statusDescription: err,
        title: 'Add a new user'
      });
    });
  },

  findAll: function(req, res){
    console.log("Inside timKiem..............");
    return User.find().then(function (users) {
      console.log("User.timKiem -- users = " + users.length);
      return res.view("user/list", {
        status: 'OK',
        title: 'List of Users',
        users: users
      });
    }).catch(function (err) {
      console.error("Error on ContactService.findAll");
      console.error(err);
      return res.view('500', {message: "Sorry, an error occurd - " + err});
    });
  },

  new : function (req, res) {
    console.log("Inside new..............");
    return res.view("user/new", {
      user: {
        username: "",
        email: "",
        password: ""
      },
      status: 'OK',
      title: 'Add a new user'
    });
  },

  delete: function (req, res) {
    console.log("Inside delete..............");
    console.log(req.param("id"));


    var deleteUser = User.destroy({id: req.param("id")}).fetch().catch(function(err){
      console.log(err);
    });
    if (deleteUser.length === 0) {
      console.log('No user found with id: ' + req.param("id"));
    } else {
      console.log('Deleted user with id: ', req.param("id"));
    }
    return res.redirect("/user/find-all");


    /*return User.find().where({id: req.param("id")}).then(function (_user) {
      if (_user && _user.length > 0) {
        console.log(_user[0]);
        _user[0].destroy().then(function (_user) {
          console.log("Deleted successfully!!! _user = " + _user);
          return res.redirect("/user/find-all");
        }).catch(function (err) {
          console.error(err);
          return res.redirect("/user/find-all");
        });
      } else {
        return res.view('500', {error: "Sorry, no User found with id - " + req.param("id")});
      }
    }).catch(function (err) {
      console.log(err);
      return res.view('500', {error: "Sorry, no User found with id - " + req.param("id")});
    });*/


  },
};

