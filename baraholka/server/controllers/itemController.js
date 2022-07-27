const { Item } = require("../models/models");
const ApiError = require("../error/ApiError");
class ItemController {
  async create(req, res) {
    const { name, price, float} = req.body;
    const item = await Item.create({ name });
    return res.json(item);
  }
  async getAll(req, res) {
    const types = await Item_type.findAll();
    return res.json(types);
  }
  async getOne(req, res) {}
}
module.exports = new ItemController();
