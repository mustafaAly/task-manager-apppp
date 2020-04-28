const sgMail = require('@sendgrid/mail')
const sendGridAPIKey = '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'
sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mustafaa.aly@outlook.com',
        subject: 'Thanks For Joining In!',
        text: 'Welcome To The App, ' + name + '. Let Me Know How You Get Along With The App.'
    });
}
module.exports = {
    sendWelcomeEmail
}