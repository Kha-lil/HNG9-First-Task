const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json())

const responseData = {
  slackUsername: "khaleel",
  backend: true,
  age: 22,
  bio: `Hello, My name is Ikumapayi Khalilullah Olaniyi, and I am a Backend Developer. My Backend stacks are Node.js, Express js and MongoDB`,
};

app.get("/", (req, res) => {
  res.status(200).json({ ...responseData });
});

app.post("/", (req, res) => {
  const { operation_type, x, y } = req.body;
  console.log(operation_type, x, y);
  const { slackUsername } = responseData;
  if (!x) {
    res.status(400).send("please provide a value for x");
  }
  if (!y) {
    res.status(400).send("please provide a value for y");
  }
  if (!operation_type) {
    res.status(400).send("please provide an operation type");
  }

  let result;

  if (operation_type === "addition") {
    result = x + y;
  }
  if (operation_type === "subtraction") {
    result = x - y;
  }
  if (operation_type === "multiplication") {
    result = x * y;
  }
  res.status(200).json({ slackUsername, result, operation_type });
});

app.listen(port, () => {
  console.log(`server is listening on port:${port}`);
});
