const isTokenAvailable = (req, res, next) => {
  if (!req.cookies.token) {
    return res
      .status(200)
      .send({ success: false, message: "Unauthenticated user.", user: null });
  } else {
    next();
  }
};

module.exports = isTokenAvailable;
