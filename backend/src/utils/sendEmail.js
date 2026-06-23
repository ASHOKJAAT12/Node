import nodemailer from 'nodemailer';
import { asyncHandler } from './asyncHandler.js';

const sendEmail = asyncHandler ( async (to , subject, html) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html
    })
})


export { sendEmail };