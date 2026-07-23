import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import { useActionState } from 'react';

const sendMail = (options)=> {
    const MailGenerator = new Mailgen(
        theme: "default",
        product: {
            name
        }
    )
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

