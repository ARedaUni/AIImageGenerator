const errorHandler = (err, req, res, next) => {
    console.log(res, req)
  const status = res.statusCode ? res.statusCode : 500;
  console.log(status)
  switch (status) {
    case 400:
      res.json({
        title: "Invalid Syntax",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 401:
      res.json({
        title: "You are not authorized to carry out this operation.",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 403:
      res.json({
        title: "You do not have permission to view this content.",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 500:
        res.json({
            title: "Internal server error",
            message: err.message,
            stackTrace: err.stack,
        })
  }
};
module.exports = errorHandler