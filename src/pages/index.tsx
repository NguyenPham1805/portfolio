import { Fragment, useMemo } from 'react'
import type { NextPage } from 'next'
import { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import { sections } from '@tn/shared/constant'
import Header from '@tn/components/Header'
import { Section } from '@tn/shared/types'
import Toast from '@tn/components/Toast'

const Home: NextPage<{ sections: Section[] }> = () => {
  const [section, setSection] = useState(0)
  const anchors = useMemo(() => sections.map((section) => section.path), [])

  return (
    <Fragment>
      <Header section={section} />

      <Toast />

      <ReactFullpage
        afterLoad={(_, destination) => setSection(destination.index)}
        anchors={anchors}
        scrollingSpeed={800}
        onLeave={(_, destination) => setSection(destination.index)}
        controlArrows={false}
        render={() => (
          <ReactFullpage.Wrapper>
            {sections.map(({ path, section: Component }) => (
              <Component key={path} currentIndex={section} />
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </Fragment>
  )
}

export default Home
