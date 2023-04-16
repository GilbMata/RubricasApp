const apiRoutes = {
  // alias for POST /user
  "POST /login": "UserController.login",
  "POST /validate": "UserController.validate",

  "GET /": "UserController.thisworks",
  "GET /users": "UserController.getAll",
  "POST /user/new": "UserController.register",

  "POST /useracces/:uuid": "UserController.useracces",
  "PUT /user/:uuid": "UserController.update",
  "DELETE /user/:uuid": "UserController.remove",

  "POST /user/img/:uuid": "UserController.userpic",

  "POST /rubrica/new": "RubricaController.register",
  "GET /rubricas/:type": "RubricaController.getAll",
  "PUT /rubrica/:uuid": "RubricaController.update",
  "DELETE /rubrica/:uuid": "RubricaController.destroy",

  "POST /userrubrica/new": "UserRubricasController.register",
  "GET /userrubricas/": "UserRubricasController.getAll",
  "GET /userrubricas/:uuid": "UserRubricasController.getrubricasuser",
  "POST /userrubrica/avg": "UserRubricasController.getAvg",

  "POST /urdates/": "UserRubricasController.getDates",
  "POST /urdata": "UserRubricasController.getData",
};

module.exports = apiRoutes;
