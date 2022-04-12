const { products } = require("../../models");

exports.postnew = function (prodname, price,img_url) {
    return products.create({
      name: prodname,
      price: price,
      img: img_url,
    });
  };