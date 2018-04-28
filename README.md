# test-project

a [Sails v1](https://sailsjs.com) application


### Links

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Sat Apr 28 2018 10:23:12 GMT+0700 (SE Asia Standard Time) using Sails v1.0.1.

<!-- Internally, Sails used [`sails-generate@1.15.21`](https://github.com/balderdashy/sails-generate/tree/v1.15.21/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->
### How to setup

1. Install Sail
    + sudo npm install -g sails
2. Create new app
    + sails new test-project
    + choose number 1
3. Run app
    + cd test-project
    + sails lift
    + Open with default port at: http://localhost:1337
4. Create controller and model
    + sails generate api user
    + sails generate api profile
5. Create a user data
    + [http://localhost:1337/user/create?username=khang.nguyen&password=12345&email=khang.nguyen@banvien.com]
    + [http://localhost:1337/profile/create?userid=2&firstname=Khang&lastname=Nguyen&gender=male&dob=1984-03-06&address=HCMC]
6. View list data
    + http://localhost:1337/user
    + http://localhost:1337/profile
7. Edit data
    + http://localhost:1337/profile/update/1?address=HCM City
8. Delete data
    + http://localhost:1337/user/destroy/1
9. Create mongo database
    1. Install adapter: npm install sails-mongo --save
    2. Create a connection in datastores.js
    3. Add data connection into each models or just add [datastore: 'sailsMongoDBServer'] into config/models.js
