// utils/mailer.js
import nodeMailer from 'nodeMailer';

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  secure: false,
    requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = async ({ to,subject, html }: {to:string, subject:string, html:string}) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw error;
  }
};

export default sendMail;