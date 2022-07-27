const { Skin } = require("../models/models");
const ApiError = require("../error/ApiError");
class SkinController {
  async create(req, res) {
    const { name } = req.body;
    const skin = await Skin.create({ name });
    return res.json(skin);
  }
  async getAll(req, res) {
    const skins = await Skin.findAll();
    return res.json(skins);
  }
}
module.exports = new SkinController();
