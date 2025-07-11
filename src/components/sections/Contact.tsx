import Image from 'next/image'
import { FC, FormEvent, useContext, useState } from 'react'

import { socialLinks } from '@tn/shared/constant'
import { SectionProps } from '@tn/shared/types'
import { ToastContext } from '@tn/store/ToastContext'
import axios from 'axios'
import { useTranslation } from 'next-i18next'

const Contact: FC<SectionProps> = () => {
  const { pushToast } = useContext(ToastContext)
  const { t } = useTranslation('contact')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setSending(true)
    try {
      await axios.post(
        '/api/email',
        { name, email, message },
        { headers: { 'Content-type': 'application/json' } }
      )
      setName('')
      setEmail('')
      setMessage('')
      pushToast('Send successfully, thanks for contacting!')
    } catch {
      pushToast(t('Email send failed! Please check all field is valid!'))
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="section lazy">
      <div className="flex w-full h-screen justify-center">
        <h1 className="text-4xl mt-24 md:mt-32 z-10">{t('Get in touch')}</h1>

        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden blur-sm brightness-[.05]">
          <video
            className="w-full h-full object-cover"
            src="/rem-background.mov"
            muted
            loop
            autoPlay
            playsInline
          ></video>
        </div>

        <div className="flex flex-col px-[5%] md:flex-row items-center justify-center w-full h-screen top-0 left-0 gap-6 md:gap-4 absolute z-10">
          <form className="w-full md:w-1/2 px-4 sm:px-8" onSubmit={handleSubmit}>
            <div className="relative mt-6 sm:mt-8 border-b-quiet-dark border-b">
              <input
                className="px-2 text-base py-1 bg-transparent block border-none w-full outline-none peer"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
              <label
                className={
                  'text-lg absolute left-2 top-2 opacity-60 pointer-events-none transition-all duration-200 ' +
                  (!!name
                    ? '-top-4 text-main-color opacity-100 text-sm'
                    : 'peer-focus:-top-4 peer-focus:text-sm peer-focus:opacity-100 peer-focus:text-main-color')
                }
              >
                {t('Name')}
              </label>
              <span className="absolute bg-main-color h-[1px] left-0 right-0 bottom-0 scale-0 transition-all duration-500  peer-focus:scale-100"></span>
            </div>

            <div className="relative mt-6 sm:mt-8 border-b-quiet-dark border-b">
              <input
                className="px-2 text-base py-1 bg-transparent block border-none w-full outline-none peer"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="off"
              />
              <label
                className={
                  'text-lg absolute left-2 top-2 opacity-60 pointer-events-none transition-all duration-200 ' +
                  (!!email
                    ? '-top-4 text-main-color opacity-100 text-sm'
                    : 'peer-focus:-top-4 peer-focus:text-sm peer-focus:opacity-100 peer-focus:text-main-color')
                }
              >
                Email
              </label>
              <span className="absolute bg-main-color h-[1px] left-0 right-0 bottom-0 scale-0 transition-all duration-500 peer-focus:scale-100"></span>
            </div>

            <div className="relative mt-6 sm:mt-8 border-b-quiet-dark border-b">
              <textarea
                className="px-2 text-base py-1 bg-transparent block border-none w-full outline-none peer"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
              ></textarea>
              <label
                className={
                  'text-lg absolute left-2 top-2 opacity-60 pointer-events-none transition-all duration-200 ' +
                  (!!message
                    ? '-top-4 text-main-color opacity-100 text-sm'
                    : 'peer-focus:-top-4 peer-focus:text-sm peer-focus:opacity-100 peer-focus:text-main-color')
                }
              >
                {t('Message')}
              </label>
              <span className="absolute bg-main-color h-[1px] left-0 right-0 bottom-0 scale-0 transition-all duration-500 peer-focus:scale-100"></span>
            </div>

            <button
              className={`mt-6 flex gap-2 group items-center border-quiet-dark border py-1 px-2 sm:py-2 sm:px-4 hover:bg-main-color hover:border-transparent hover:text-dark transition-all ${
                name === '' || email === '' || message === ''
                  ? 'pointer-events-none bg-opacity-60'
                  : ''
              }`}
              type="submit"
              disabled={name === '' || email === '' || message === ''}
            >
              {t('Send')}
              {sending && (
                <div className="border border-transparent border-t-main-color group-hover:border-t-dark border-b-main-color group-hover:border-b-dark rounded-full w-4 h-4 spin"></div>
              )}
            </button>
          </form>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl">{t('Other places')}</h3>

            <ul className="flex justify-center md:justify-start md:flex-col px-4 sm:px-8 mt-4 sm:mt-8 gap-6">
              {socialLinks.map((item) => (
                <li key={item.link}>
                  <a
                    className="flex items-center gap-4 w-fit"
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                  >
                    <Image width={50} height={50} src={item.icon} alt="" />
                    <span className="hidden md:inline">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
