const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

// Set cookie across all subdomains of example.com
app.get("/set-cookie", (req, res) => {
  res.cookie("token", "sainapints toke", {
     domain: ".onrender.com", // enables sharing across subdomains
    path: "/",
    httpOnly: true,
    secure: true, // set to true if using HTTPS
    sameSite: "lax", // or 'none' if using cross-site requests
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.send("Cookie has been set across subdomains!");
});

// Access cookie
app.get("/get-cookie", (req, res) => {
  const token = req.cookies.token;
  res.send(`Token from cookie: ${token}`);
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server running on port ::"+PORT);
});
