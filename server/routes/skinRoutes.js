const Router = require("express");
const skinController = require("../controllers/skinController");
const router = new Router();
const SkinController = require("../controllers/skinController");
router.post("/", skinController.create);
router.get("/", skinController.getAll);

module.exports = router;
