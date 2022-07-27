const { Item_type } = require("../models/models");
const ApiError = require("../error/ApiError");
class Item_typeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Item_type.create({ name });
    return res.json(type);
  }
  async getAll(req, res) {
    const types = await Item_type.findAll();
    return res.json(types);
  }
}

module.exports = new Item_typeController();
