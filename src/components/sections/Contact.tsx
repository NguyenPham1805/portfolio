import { FC, FormEvent } from 'react'
import { SectionProps } from '@tn/shared/types'
import Image from 'next/image'
import { socialLinks } from '@tn/shared/constant'

const Contact: FC<SectionProps> = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <div className="section">
      <div className="flex w-full h-screen justify-center">
        <h1 className="text-4xl mt-32 z-10">Get in touch</h1>

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

        <div className="flex items-center w-full h-screen top-0 left-0 gap-4 absolute z-10">
          <form className="w-1/2 px-8" onSubmit={handleSubmit}>
            <div className="relative mt-6 sm:mt-8 border-b-quiet-dark border-b">
              <input
                className="text-lg px-2 py-1 bg-transparent block border-none w-full outline-none peer"
                type="text"
              />
              <label className="text-lg absolute left-2 top-2 opacity-60 pointer-events-none transition-all duration-200 peer-focus:-top-4 peer-focus:text-sm  peer-focus:opacity-100 peer-focus:text-main-color">
                Name
              </label>
              <span className="absolute bg-main-color h-[1px] left-0 right-0 bottom-0 scale-0 transition-all duration-500  peer-focus:scale-100"></span>
            </div>

            <div className="relative mt-6 sm:mt-8 border-b-quiet-dark border-b">
              <input
                className="text-lg px-2 py-1 bg-transparent block border-none w-full outline-none peer"
                type="text"
              />
              <label className="text-lg absolute left-2 top-2 opacity-60 pointer-events-none transition-all duration-200 peer-focus:-top-4 peer-focus:text-sm peer-focus:opacity-100 peer-focus:text-main-color">
                Email
              </label>
              <span className="absolute bg-main-color h-[1px] left-0 right-0 bottom-0 scale-0 transition-all duration-500 peer-focus:scale-100"></span>
            </div>

            <div className="relative mt-6 sm:mt-8 border-b-quiet-dark border-b">
              <textarea className="text-lg px-2 py-1 bg-transparent block border-none w-full outline-none peer"></textarea>
              <label className="text-lg absolute left-2 top-2 opacity-60 pointer-events-none transition-all duration-200 peer-focus:-top-4 peer-focus:text-sm peer-focus:opacity-100 peer-focus:text-main-color">
                Message
              </label>
              <span className="absolute bg-main-color h-[1px] left-0 right-0 bottom-0 scale-0 transition-all duration-500 peer-focus:scale-100"></span>
            </div>

            <button className="mt-6 border-quiet-dark border py-1 px-2 sm:py-2 sm:px-4 hover:bg-main-color hover:border-transparent hover:text-dark transition-all">
              Send
            </button>
          </form>

          <div className="w-1/2">
            <h3 className="text-2xl">Other places</h3>

            <ul className="flex flex-col px-8 mt-8 gap-6">
              {socialLinks.map((item) => (
                <li key={item.link}>
                  <a
                    className="flex items-center gap-4"
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                  >
                    <Image width={50} height={50} src={item.icon} alt="" />
                    <span>{item.title}</span>
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
