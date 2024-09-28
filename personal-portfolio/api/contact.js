const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    const mailOptions = {
      from: `${firstName} ${lastName} <${email}>`,
      to: "csinha@terpmail.umd.edu",
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      // Attempt to send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: "Message Sent" });

    } catch (error) {
      console.error("Error sending email:", error);

      // Improved error handling with clear messaging
      if (error.response) {
        // Nodemailer-specific errors (e.g., issues with sending mail)
        res.status(500).json({ 
          status: "Error", 
          message: "Failed to send email. Please check your email service configuration." 
        });
      } else {
        // Other types of errors (e.g., issues with request/response, networking)
        res.status(500).json({ 
          status: "Error", 
          message: "An unexpected error occurred. Please try again later." 
        });
      }
    }

  } else {
    // Handle non-POST methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
