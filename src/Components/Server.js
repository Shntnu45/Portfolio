const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(bodyParser.json());

// Create a transporter object for nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'shantanulchaudhari2003@gmail.com', // your email
    pass: 'Shantu@2003' // your email password
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // You can add validation logic here to ensure the fields are not empty
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  // Create a mail options object
  const mailOptions = {
    from: email, // sender's email
    to: 'shantanulchaudhari2003@gmail.com', // your email
    subject: `Message from ${name}`,
    text: message
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email sent: ' + info.response);
    res.status(201).json({ message: 'Message sent successfully!' });
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});