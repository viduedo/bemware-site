import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)

  const { name, email, phone, message } = await JSON.parse(req.body)

  const transport = nodemailer.createTransport({
    host: process.env.SMTP,
    port: Number(process.env.SMTP_PORT) || 0,
    secure: true,
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.TO_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Solicitação de Contato: ${name} | (${email}) | (${phone})`,
    text: message,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent")
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()
    return res
      .status(200)
      .json({
        message:
          "Mensagem enviada com sucesso! Em breve entraremos em contato.",
      })
  } catch (err) {
    return res.status(500).json({
      error: "Ops... Parece que ocorreu um problema no envio da mensagem.",
    })
  }
}
