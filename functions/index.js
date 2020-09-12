const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HQ7v0Jl838outwVAvbqW7dh9DM9Aej91NsRA1VYIm1k1u2HJnvJlSZdCgCXHDiBOiZ8rBqz3ZmPmwcdTrtwpbN300OyLuDmxq"
);

//API

//App config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/ecommerce--clone-2d5d7/us-central1/api
