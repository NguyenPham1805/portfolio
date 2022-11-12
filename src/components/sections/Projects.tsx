import { FC } from 'react'
import Image from 'next/image'
import { SectionProps } from '@tn/shared/types'
import { projects } from '@tn/shared/constant'
import FadeCarousel from '../FadeCarousel'
import TDCarousel from '../TDCarousel'
import { useTranslation } from 'next-i18next'

const Project: FC<SectionProps> = () => {
  const { t } = useTranslation('projects')

  return (
    <div className="section">
      <FadeCarousel autoPlay={false}>
        {projects.map((project, i) => (
          <div
            className={`flex gap-2 px-[5%] min-w-full ${i % 2 !== 0 && 'flex-row-reverse'}`}
            key={i}
          >
            <div className="flex w-[65%] items-center flex-shrink-0">
              <TDCarousel>
                {project.thumbs.map((thumb) => (
                  <Image
                    key={thumb}
                    src={thumb}
                    placeholder="blur"
                    blurDataURL={thumb}
                    layout="fill"
                    alt=""
                  />
                ))}
              </TDCarousel>
            </div>

            <div className="flex flex-col w-[35%] gap-4 flex-shrink-0">
              <h2 className={`text-2xl ${i % 2 !== 0 && 'text-right'} ${project.classColor}`}>
                {project.title}
              </h2>

              <p className={`text-base sm:text-lg ${i % 2 !== 0 && 'text-right'}`}>
                {t(project.description)}
              </p>

              <p className={`text-base sm:text-lg flex gap-1 ${i % 2 !== 0 && 'text-right'}`}>
                <span className="flex-shrink-0">Link demo:</span>
                <a
                  className="text-main-color clamp hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href={project.linkDemo}
                >
                  {project.linkDemo}
                </a>
              </p>

              <p className={`text-base sm:text-lg flex gap-1 ${i % 2 !== 0 && 'text-right'}`}>
                <span className="flex-shrink-0">Link git:</span>
                <a
                  className="text-main-color clamp hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href={project.linkGit}
                >
                  {project.linkGit}
                </a>
              </p>

              <div className="flex gap-2 items-center flex-wrap">
                <h4 className="text-xl">{t('techs used')}: </h4>
                {project.tags.map((tag) => (
                  <span
                    className={`${tag} text-xs sm:text-sm flex items-center px-1 py-[1px] capitalize border`}
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </FadeCarousel>
    </div>
  )
}

export default Project
