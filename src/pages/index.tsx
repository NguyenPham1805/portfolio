import { Fragment, useMemo } from 'react'
import type { NextPage } from 'next'
import { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import { sections } from '@tn/shared/constant'
import Header from '@tn/components/Header'

const Home: NextPage = () => {
  const [section, setSection] = useState(0)
  const anchors = useMemo(() => sections.map((section) => section.path), [])

  return (
    <Fragment>
      <Header section={section} />

      <ReactFullpage
        afterLoad={(_, destination) => setSection(destination.index)}
        anchors={anchors}
        scrollingSpeed={800}
        onLeave={(_, destination) => setSection(destination.index)}
        slidesNavigation={true}
        slidesNavPosition="bottom"
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
