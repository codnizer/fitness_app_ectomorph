/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors");

// Initialize CORS
const corsHandler = cors({origin: true});

// Configure your email transport (Gmail example)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yassnozer@gmail.com",
    pass: "tquz upsr ciop gsbh", // Consider using an app password
  },
});

// Example function to send an email
exports.sendEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    const {email, subject, message} = req.body;

    const mailOptions = {
      from: "yassnozer@gmail.com",
      to: email,
      subject: subject,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("Email sent successfully");
    } catch (error) {
      res.status(500).send("Error sending email: " + error.toString());
    }
  });
});
