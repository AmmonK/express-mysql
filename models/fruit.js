"use strict";
module.exports = (sequelize, DataTypes) => {
  const Fruit = sequelize.define(
    "Fruit",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING
    },
    {}
  );
  Fruit.associate = function(models) {
    // associations can be defined here
  };
  return Fruit;
};
