require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const axios = require("axios");
const FormData = require("form-data");

const app = express();
app.use(cors());

const upload = multer();

app.post("/api/palm-reading", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const formData = new FormData();

    formData.append("files", req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    const apiUrl = `${process.env.LANGFLOW_BASE_URL}/api/v1/flows/${process.env.FLOW_ID}/predict`;

    console.log("Sending request to:", apiUrl); // Debug log

    const response = await axios({
      method: "post",
      url: apiUrl,
      headers: {
        Authorization: `Bearer ${process.env.LANGFLOW_TOKEN}`,
        "X-Langflow-Id": process.env.LANGFLOW_ID,
        ...formData.getHeaders(),
      },
      data: formData,
    });

    res.json(response.data);
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({
      error: "Failed to process request",
      details: error.response?.data || error.message,
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
