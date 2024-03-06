import userModel from "../modules/user.model.js";

const admin = async (req, res, next) => {
  const { user } = req;
  console.log(user.id);

  const isAdmin = await userModel.findOne({ _id: user.id, isAdmin: true});
  
  if (isAdmin) {
    next();
  } else {
    return res.status(403).send({
      success: false,
      message: "You are not authorized to access this route",
    });
  }
};

export default admin;
