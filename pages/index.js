import React from 'react'
import Head from 'next/head'

const ApollonlabStudiosInProgressDevelopmentPage = (props) => {
  return (
    <>
      <div className="apollonlab-studios-in-progress-development-page-container">
        <Head>
          <title>Apollonlab | Product design agency</title>
          <meta
            name="description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
          <meta
            property="og:title"
            content="Apollonlab | Product design agency "
          />
          <meta
            property="og:description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .apollonlab-studios-in-progress-development-page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 1200px) {
            .apollonlab-studios-in-progress-development-page-container {
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default ApollonlabStudiosInProgressDevelopmentPage
