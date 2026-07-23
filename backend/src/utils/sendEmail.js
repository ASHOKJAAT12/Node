import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import { useActionState } from 'react';
import { text } from 'express';
import Mail from 'nodemailer/lib/mailer';

const sendMail = (options)=> {
    const MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanager.com"
        }
    })

    const emailTextual = MailGenerator.generatePlaintext(options.MailgenContent);

    const emailHtml = MailGenerator.generate(options.MailgenContent);

    const transport = nodemailer.createTransport({
        host: process.env.NODEMAILER_SMTP_HOST,
        port: process.env.NODEMAILER_SMTP_PORT,
        auth: {
            user: process.env.NODEMAILER_SMTP_USER,
            pass: process.env.NODEMAILER_SMTP_PASS
        }
    });

    const mail = {
        from: "taskmanager@gamil.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    };

    try {
        await transport.sendMail(mail);
    } catch (error) {
        console.error("Email service failed siliently. Make sure that you have provided your MAILTRAP creadentials in the .env file");
        console.error("Error: ", error);
    }
}
const emailVerificationMailgenContent = (username , verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "welcome to my app. thank you come here.",
            action: {
                instructions: "email verification link here!",
                button: {
                    color: "rgb(96, 240, 104)",
                    text: "Email verification link.",
                    link: verificationUrl
                }
            },
            outro: "Need help contact our email"
        }
    }
}

const forgotPasswordMailgenContent = ( username , ResetPasswordUrl ) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our app. tahnk you for visiting ",
            action: {
                instructions: "Reset password link here.",
                button: {
                    color: "rgb(96, 240, 104)",
                    text: "Reset Pssword",
                    link: ResetPasswordUrl
                }
            },
            outro: "Need any help contact our email support."
        }
    }
}

