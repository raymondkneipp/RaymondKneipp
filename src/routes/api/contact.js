import sgMail from "@sendgrid/mail"

export async function post(request) {
    try {
        const body = JSON.parse(request.body);
    
        const email = body.email;
        const msg = body.msg;
    
        sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);
    
        const message = {
            to: 'raymond.f.kneipp@gmail.com', // Change to your recipient
            from: "Contact Form <hello@raymondkneipp.com>", // Change to your verified sender
            subject: 'Email from raymondkneipp.com',
            text: `${email} said "${msg}"`,
        }

        await sgMail.send(message);
    
        return {
            status: 200,
            body: { status: 200, msg: "Message sent successfully! I will get back to you soon." }
        };
        
    } catch (error) {
        return {
            status: 500,
            body: { status: 500, msg: "An error has occurred. Please try again later." }
        };
    }
}