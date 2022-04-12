const interactService=require('./interactService')
exports.listShow = (req, res, next) => {
    res.render("/list");
  };
  exports.postShow = (req, res, next) => {
    res.render("/post");
  };