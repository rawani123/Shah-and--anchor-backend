import jwt from "jsonwebtoken";

export const authentication = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];
    console.log(authorizationHeader)
    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "No token, authorization denied",
      });
    }
    // const token = req.headers["authorization"].split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).send({
          success: false,
          message: "Token is not valid",
        });
      }
      req.userID = user.id;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: `Error in Login ${error.message}`,
    });
  }
};
