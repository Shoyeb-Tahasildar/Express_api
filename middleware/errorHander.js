const errorHandler = (err, req, res, next) => {
  const statuscode = res.statuscode ? res.statuscode : 500;
  res.json({ title: "Not Found",message: err.message, stackTrace: err.stack });
  res.json({ title: "valiadation error",message: err.message, stackTrace: err.stack });
};

module.exports = errorHandler;
