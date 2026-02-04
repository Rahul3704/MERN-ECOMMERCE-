const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id: "dummy",
  client_secret: "dummy",
});

module.exports = paypal;
