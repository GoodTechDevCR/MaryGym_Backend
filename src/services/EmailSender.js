import nodemailer from 'nodemailer';

const transporterEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Puerto default de Gmail
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "goodtechdevcr@gmail.com",
        pass: "kybn vsde vnbm exwy", // Contraseña generada API seguridad para MaryGym
    },
});

transporterEmail.verify().then(() => {
    console.log("Ready to send emails");
});

export async function EnvioCorreo(correoElectronico, nombre, apellido) {
    // Send mail with defined transport object
    const info = await transporterEmail.sendMail({
        from: '"Cambio Contrasena" <goodtechdevcr@gmail.com>', // Sender address
        to: correoElectronico, // List of receivers
        subject: "Cambio Contrasena MaryGym", // Subject line
        text: `Hola ${nombre} ${apellido}, Esperemos que estes bien!
        Accede por favor al siguiente link para su cambio de contrasena: http://localhost:3000/usuario/passwordChange/${correoElectronico} 
        Te recordamos que actualmente cuentas con la contrasena default (123), por lo que para tener una mayor seguridad te incitamos al cambio.`
    });


    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}




