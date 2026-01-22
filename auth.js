const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //------------------------working code---------------------
  if (!req.path.includes("login")) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(200).json({
        success: false,
        message: "Error! JWT Token was not provided.",
      });
    }
    console.log("----------auth header present--------------");
    const token = authHeader.split(" ")[1];
    //Authorization: 'Bearer TOKEN'
    if (!token) {
      return res.status(200).json({
        success: false,
        message: "Error! JWT Token was not provided.",
      });
    }
    console.log("----------token present--------------");
    //Decoding the token
    // const decodedToken = jwt.verify(token, "ashaykolhe"); //TODO put in env
    // res.status(200).json({
    //   success: true,
    //   data: {
    //     email: decodedToken.email,
    //   },
    // });
    // process.env.JWT_SECRET;
    try {
      const decodedToken = jwt.verify(token, "ashaykolhe");

      // if (!decodedToken) {
      //   console.log("----------token error--------------" + err.message);
      //   return res.status(403).json({ message: "Invalid or expired token " });
      // }
      console.log("----------token verified--------------");
      console.log(decodedToken);
      req.loggedInUser = decodedToken;
    } catch (err) {
      console.log("----------token catch error--------------" + err.message);
      return res.status(403).json({ message: "Invalid or expired token " });
    }
  }
  next();
};
