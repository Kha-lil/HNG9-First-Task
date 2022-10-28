const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors())

const responseData = {
  slackUsername: "khaleel",
  backend: true,
  age: 22,
  bio: `Hello, My name is Ikumapayi Khalilullah Olaniyi, and I am a Backend Developer. My Backend stacks are Node.js, Express js and MongoDB`,
};

app.get("/", (req, res) => {
  res.json({ ...responseData });
});

app.listen(port, () => {
  console.log(`server is listening on port:${port}`);
});
