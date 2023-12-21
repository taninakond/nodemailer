const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const sendmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'mail.wpwebdevbd.com',
        port: 465,
        secure: true,
        auth: {
            user: 'info@wpwebdevbd.com',
            pass: '-V[E6.jAK(b=',
        },
    });

    const message = {
        from: '"Hello from Tanin" <info@wpwebdevbd.com>',
        to: 'taninpabna@gmail.com, jakirmithunbd@gmail.com',
        subject: "Hello It's test mail ✔",
        text: 'Hello world? Please ignore it',
        html: '<b>Hello world? New mail</b>',
    };

    transporter
        .sendMail(message)
        .then((info) => {
            return res.status(201).json({
                msg: 'you should recieve an email',
                info: info.messageId,
            });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });
};

const sendgmail = (req, res) => {
    const config = {
        service: 'gmail',
        auth: {
            user: 'taninpabna@gmail.com',
            pass: 'upbvtkfgilufmtek',
        },
    };

    const transporter = nodemailer.createTransport(config);

    const MailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Mailgen',
            link: 'https://mailgen.js/',
        },
    });

    const response = {
        body: {
            name: 'Tanin Ahmed',
            intro: 'Test mail intro',
            table: {
                data: [
                    {
                        item: 'Test Item',
                        description: 'Test Description',
                    },
                    {
                        item: 'Test Item 2',
                        description: 'Test Description 2',
                    },
                    {
                        item: 'Test Item 3',
                        description: 'Test Description 3',
                    },
                ],
            },
            outro: 'Test outro',
        },
    };

    const mail = MailGenerator.generate(response);

    const message = {
        form: 'taninpabna@gamil.com',
        to: 'taninakond@gmail.com',
        subject: 'Test Mail Subject',
        html: mail,
    };

    transporter
        .sendMail(message)
        .then((info) => {
            return res.status(200).json({
                msg: 'you should receive an email',
            });
        })
        .catch((error) => {
            return res.status(500).json({
                msg: error,
            });
        });
};

module.exports = {
    sendmail,
    sendgmail,
};
