const nodemailer = require('nodemailer');
exports.sendEmailFunction = (url,email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sheetalbedarkar0108@gmail.com',
            pass: 'sheetal8446'
        },
    });
    const mailOptions = {
        from: 'sheetalbedarkar0108@gmail.com',
        to: 'sheetalbedarkar96@gmail.com',
        subject: 'Chat-app password reset link ',
        text: 'Click on the link provided to reset your password:\n\n' + url
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("Invalid username or password");
            console.log("ERROR: while sending the mail", err)
        }
        else
            console.log('Information regarding the mail sent', info);
    });
}