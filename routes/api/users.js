const router = require("express").Router();
const userController = require("../../controllers/userController");

// user routes go here
router.route("/")
  .get(userController.findUsers)
  .post(userController.createUser)

///:username
router.route("/:id")
  .get(userController.getUser)
  
//:username/populate/:id
router.route("/populate/:id")
  .get(userController.populateList)


module.exports = router;