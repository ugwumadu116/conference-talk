import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3001;
const prefix = "/api/v1";

app.get("/", (req, res) =>
  res.status(200).json({
    status: 200,
    data: "welcome to Conference talk api"
  })
);

app.use(async (req, res) => {
  try {
    throw new Error("Route does not exist");
  } catch (error) {
    return res.status(error.status || 404).json({
      status: error.status || 404,
      error: error.message
    });
  }
});

app.listen(PORT, () => console.log(`Welcome ${PORT}`));

export default app;
