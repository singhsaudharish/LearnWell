require("dotenv").config();

const nodemailer = require("nodemailer");

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

console.log("USER:", user);
console.log("PASS EXISTS:", !!pass);
console.log("PASS LENGTH:", pass ? pass.length : 0);

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: user,
        pass: pass,
    },
});

transporter.verify()
    .then(() => {
        console.log("✅ SMTP LOGIN SUCCESS");
    })
    .catch((error) => {
        console.error("❌ SMTP LOGIN FAILED");
        console.error(error);
    });