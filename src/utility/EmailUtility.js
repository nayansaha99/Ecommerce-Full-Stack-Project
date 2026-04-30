import nodemailer from 'nodemailer';
export async function SendEmail(EmailTo, EmailText, EmailSubject) {
   let Transport = nodemailer.createTransport({
      host:"smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      tls: { rejectUnauthorized: false }
   })
   let MailOption = {
      from: `Next Ecommerce <${process.env.EMAIL_USER}>`,
      to: EmailTo,
      subject: EmailSubject,
      text: EmailText
   }
   return await Transport.sendMail(MailOption)
}
