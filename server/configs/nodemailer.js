import nodemailer from "nodemailer";

const getTransporter = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log("Verifying transporter...");

  try {
    await transporter.verify();
    console.log("Transporter is ready!");
    return transporter;
  } catch (error) {
    console.error("Failed to verify transporter:", error);
    throw error;
  }
};

export default getTransporter;
