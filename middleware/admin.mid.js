export const admin = async (req, res, next) => {
  const { user } = req;

  if (user.isAdmin) {
    next();
  } else {
    return res
      .status(403)
      .send({
        success: false,
        message: "You are not authorized to access this route",
      });
  }
};
