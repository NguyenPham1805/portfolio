import { projects } from '@tn/shared/constant'
import { SectionProps } from '@tn/shared/types'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { FC } from 'react'
import FadeCarousel from '../FadeCarousel'
import TDCarousel from '../TDCarousel'

const Project: FC<SectionProps> = () => {
  const { t } = useTranslation('projects')

  return (
    <div className="section lazy">
      <FadeCarousel autoPlay={false} indicatorClassName="bottom-20 md:bottom-6">
        {projects.map((project, i) => (
          <div
            className={`flex flex-col md:flex-row gap-2 px-[5%] min-w-full ${
              i % 2 === 0 && 'md:flex-row-reverse'
            }`}
            key={i}
          >
            <div className="flex flex-col sm:w-full md:w-[35%] gap-1 md:gap-4 flex-shrink-0">
              <h2 className={`text-2xl ${i % 2 !== 0 && 'md:text-right'} ${project.classColor}`}>
                {project.title}
              </h2>

              <p className={`text-base sm:text-lg ${i % 2 !== 0 && 'md:text-right'}`}>
                {t(project.description)}
              </p>

              <p className={`text-base sm:text-lg flex gap-1 ${i % 2 !== 0 && 'md:text-right'}`}>
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

              <p className={`text-base sm:text-lg flex gap-1 ${i % 2 !== 0 && 'md:text-right'}`}>
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
                <h4 className="text-xl">{t('Technologies')}: </h4>
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

            <div className="flex w-full md:w-[65%] items-center flex-shrink-0 sm:px-[10%] md:px-0">
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
          </div>
        ))}
      </FadeCarousel>
    </div>
  )
}

export default Project
