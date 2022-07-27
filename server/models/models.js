const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const BasketDevice = sequelize.define("basket_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const Item = sequelize.define("item", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  float: { type: DataTypes.INTEGER, allowNull: false },
});
const Item_type = sequelize.define("item_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});
const Skin = sequelize.define("skin", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});
const Advertisement = sequelize.define("advertisement", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  createdDate: { type: DataTypes.DATE, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Item.hasOne(Item_type);
Item_type.belongsTo(Item);

Item.hasOne(Skin);
Skin.belongsTo(Item);

User.hasMany(Advertisement);
Advertisement.belongsTo(User);

Advertisement.hasOne(Item);
Item.belongsTo(Advertisement);

Item.hasOne(Skin);
Skin.belongsTo(Item);

Item_type.hasOne(Skin);
Skin.belongsTo(Item_type);

module.exports = {
  User,
  Basket,
  BasketDevice,
  Item,
  Item_type,
  Skin,
  Advertisement,
};
