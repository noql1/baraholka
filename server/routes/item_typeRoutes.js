const Router = require("express");
const router = new Router();
const item_typeController = require("../controllers/item_typeController");

const checkRole = require("../middleware/checkRoleMiddleware");
router.post("/", checkRole("ADMIN"), item_typeController.create);
router.get("/", item_typeController.getAll);
module.exports = router;
