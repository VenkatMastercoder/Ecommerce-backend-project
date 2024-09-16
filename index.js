const express = require("express");
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ALL Working in VI");
});

// Get all Product
app.get("/products", async (req, res) => {
  // 1. Data from Frontend

  // 2. DB Logic
  const product = await prisma.product.findMany();

  // 3. Data to Frontend
  res.json({ message: "Product Data Retived Sucessfully", data: product });
});

// Get a Product Data By Id
app.get("/products/:productId", async (req, res) => {
  // 1. Data from Frontend
  const data = req.params; // data: { productId:"SDFVS" }

  // 2. DB Logic
  const product = await prisma.product.findUnique({
    where: {
      product_id: data.productId,
    },
  });

  // 3. Data to Frontend
  res.json({ message: "Product Data Retived Sucessfully", data: product });
});

// Post a Product
app.post("/products", async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  const newProductData = await prisma.product.create({
    data: {
      product_title: data.product_title,
      product_orignal_price: data.product_orignal_price,
      product_discout_price: data.product_discout_price,
      product_image_url: data.product_image_url,
      product_details: data.product_details,
      product_information: data.product_information,
      product_rating: data.product_rating,
    },
  });

  // 3. Data to Frontend
  res.json({ message: "Product Addded Sucessfully", data: newProductData });
});

// Update a Product
app.put("/products", async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  const updateProductData = await prisma.product.update({
    where: {
      product_id: data.product_id,
    },
    data: {
      product_title: data.product_title,
      product_orignal_price: data.product_orignal_price,
      product_discout_price: data.product_discout_price,
      product_image_url: data.product_image_url,
      product_details: data.product_details,
      product_information: data.product_information,
      product_rating: data.product_rating,
    },
  });

  // 3. Data to Frontend
  res.json({
    message: "Product Data Update Sucessfully",
    data: updateProductData,
  });
});

// Delete a Product
app.delete("/products/:productId", async (req, res) => {
  // 1. Data from Frontend
  const data = req.params;

  // 2. DB Logic
  await prisma.product.delete({
    where: {
      product_id: data.productId,
    },
  });

  // 3. Data to Frontend
  res.json({ message: "Product Deleted Sucessfully" });
});

app.listen(3000);