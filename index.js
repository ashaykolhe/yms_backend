const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Video = require("./models/video.model.js");
const videoRoute = require("./routes/video.route.js");
const videoStatusRoute = require("./routes/videoStatus.route.js");
const domainRoute = require("./routes/domain.route.js");
const ideaRoute = require("./routes/idea.route.js");
const userRoute = require("./routes/user.route.js");

const videoAdminRoute = require("./routes/videoAdmin.route.js");
const videoStatusAdminRoute = require("./routes/videoStatusAdmin.route.js");
const domainAdminRoute = require("./routes/domainAdmin.route.js");
const ideaAdminRoute = require("./routes/ideaAdmin.route.js");
const userAdminRoute = require("./routes/userAdmin.route.js");
const auth = require("./auth.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
// console.log("--- New Request ---");
// // Accessing all headers as an object
// console.log("All headers:", req.headers);

// // Accessing a specific header using req.get() (case-insensitive)
// const userAgent = req.get("User-Agent");
// console.log("User-Agent header:", userAgent);

// // Accessing a specific header using req.headers object (lowercase key)
// const authorizationHeader = req.headers["authorization"];
// console.log("Authorization header:", authorizationHeader);

// // You can also add logic to enforce specific headers, like for authentication
// if (!authorizationHeader || authorizationHeader !== "expected_token") {
//   // Optional: terminate the request here if the header is missing/invalid
//   // return res.status(401).send('Unauthorized: Missing or invalid token.');
// }

// //------------------------working code---------------------
// if (!req.path.includes("login")) {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(200).json({
//       success: false,
//       message: "Error! JWT Token was not provided.",
//     });
//   }
//   console.log("----------auth header present--------------");
//   const token = authHeader.split(" ")[1];
//   //Authorization: 'Bearer TOKEN'
//   if (!token) {
//     return res.status(200).json({
//       success: false,
//       message: "Error! JWT Token was not provided.",
//     });
//   }
//   console.log("----------token present--------------");
//   //Decoding the token
//   // const decodedToken = jwt.verify(token, "ashaykolhe"); //TODO put in env
//   // res.status(200).json({
//   //   success: true,
//   //   data: {
//   //     email: decodedToken.email,
//   //   },
//   // });
//   // process.env.JWT_SECRET;
//   try {
//     const decodedToken = jwt.verify(token, "ashaykolhe");

//     // if (!decodedToken) {
//     //   console.log("----------token error--------------" + err.message);
//     //   return res.status(403).json({ message: "Invalid or expired token " });
//     // }
//     console.log("----------token verified--------------");
//     console.log(decodedToken);
//     req.loggedInUser = decodedToken;
//   } catch (err) {
//     console.log("----------token catch error--------------" + err.message);
//     return res.status(403).json({ message: "Invalid or expired token " });
//   }
// }

// Pass control to the next middleware or route handler
// next();
// });

app.use(auth);

// routes
app.use("/api/video", videoRoute);
app.use("/api/videoStatus", videoStatusRoute);
app.use("/api/domain", domainRoute);
app.use("/api/idea", ideaRoute);
app.use("/api/user", userRoute);

app.use("/api/admin/video", videoAdminRoute);
app.use("/api/admin/videoStatus", videoStatusAdminRoute);
app.use("/api/admin/domain", domainAdminRoute);
app.use("/api/admin/idea", ideaAdminRoute);
app.use("/api/admin/user", userAdminRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});
//TODO - env wise property file
mongoose
  .connect("mongodb://localhost:27017/yms") //TODO - put in env
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// const express = require("express");
// const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
// const productRoute = require("./routes/product.route.js");
// const app = express();

// // middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // routes
// app.use("/api/products", productRoute);

// app.get("/", (req, res) => {
//   res.send("Hello from Node API Server Updated");
// });

// // mongoose
// //   .connect(
// //     "mongodb+srv://ashaykolhe:ashaykolhe@cluster0.iuywwi0.mongodb.net/?appName=Cluster0",
// //     { serverApi: { version: "1", strict: true, deprecationErrors: true } },
// //   )
// //   .then(() => {
// //     console.log("Connected to database!");
// //     app.listen(3000, () => {
// //       console.log("Server is running on port 3000 ");
// //     });
// //   })
// //   .catch((e) => {
// //     console.log(e);
// //   });

// // const uri = "mongodb+srv://ashaykolhe:ashaykolhe@cluster0.iuywwi0.mongodb.net/yms?appName=Cluster0";
// const uri = "mongodb://localhost:27017";
// // const uri =
// // "mongodb://ashaykolhe:ashaykolhe@mtm-aws-aps1-16-m0-13-shard-00-01.kd6lu7.mongodb.net:27017";
// // "mongodb://ashaykolhe:ashaykolh@cluster0-shard-00-00.iuywwi0.mongodb.net:27017,cluster0-shard-00-01.iuywwi0.mongodb.net:27017,cluster0-shard-00-02.iuywwi0.mongodb.net:27017/uvotake?ssl=true&replicaSet=atlas-nsfqg-shard-0&authSource=admin";

// const clientOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };
// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!",
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);
