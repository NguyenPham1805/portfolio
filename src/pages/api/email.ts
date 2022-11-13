import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport, SendMailOptions } from 'nodemailer'
import { ContactMessage } from '@tn/shared/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = JSON.parse(req.body) as ContactMessage

  if (name === '' || email === '' || message === '') {
    res.status(400).json({ message: 'failed' })
    return
  }

  const emailOption: SendMailOptions = {
    from: email,
    to: process.env.NODE_MAILER_AUTH_USER,
    subject: `From ${name} contact`,
    html: `
      <b>${name}</b>
      <p>${message}</p>
    `,
  }

  const transportor = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODE_MAILER_AUTH_USER,
      pass: process.env.NODE_MAILER_AUTH_PASS,
    },
  })

  try {
    const result = await transportor.sendMail(emailOption)
    console.log('message id:', result.messageId)
    res.status(200).json({ message: 'success', id: result.messageId })
  } catch (error) {
    res.status(400).json({ message: 'failed', error })
  }
}

export default handler
