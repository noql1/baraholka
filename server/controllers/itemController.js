const uuid = require("uuid");
const path = require("path");
const { Item } = require("../models/models");
const ApiError = require("../error/ApiError");

class itemController {
  async create(req, res, next) {
    try {
      let { name, price, float, skinId, item_typeId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const item = await Item.create({
        name,
        price,
        float,
        skinId,
        item_typeId,
        img: fileName,
      });
      // if (info) {
      //     info = JSON.parse(info)
      //     info.forEach(i =>
      //         DeviceInfo.create({
      //             title: i.title,
      //             description: i.description,
      //             deviceId: device.id
      //         })
      //     )
      // }

      return res.json(item);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { skinId, item_typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let items;
    if (!skinId && !item_typeId) {
      items = await Device.findAndCountAll({ limit, offset });
    }
    if (skinId && !item_typeId) {
      items = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!skinId && item_typeId) {
      items = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (skinId && item_typeId) {
      items = await Device.findAndCountAll({
        where: { typeId, brandId },
        limit,
        offset,
      });
    }
    return res.json(items);
  }

  async getOne(req, res) {
    // const { id } = req.params;
    // const device = await Device.findOne({
    //   where: { id },
    //   include: [{ model: DeviceInfo, as: "info" }],
    // });
    // return res.json(device);
  }
}

module.exports = new itemController();
