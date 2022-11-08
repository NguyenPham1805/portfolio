import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport, SendMailOptions } from 'nodemailer'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const payload = req.body
  const email: SendMailOptions = {
    from: payload.email,
    to: 'averaysia@gmail.com',
    subject: `From ${payload.name} contact`,
    html: `
      <b>${payload.name}</b>
      <p>${payload.message}</p>
    `,
  }

  const transportor = createTransport({
    host: 'trungnguyendev.vercel.app',
    port: 587,
    secure: true,
    auth: {
      user: 'averaysia@gmail.com',
      pass: 'Trungnguyen1805',
    },
  })

  try {
    const result = await transportor.sendMail(email)
    console.log('message id:', result.messageId)
    res.status(200).json({ message: 'success', id: result.messageId })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: 'failed' })
  }
}

export default handler
