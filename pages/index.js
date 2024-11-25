import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const ApollonlabStudiosInProgressDevelopmentPage = (props) => {
  return (
    <>
      <div className="apollonlab-studios-in-progress-development-page-container1">
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
        <section className="apollonlab-studios-in-progress-development-page-background-unicorn-state-active">
          <div className="apollonlab-studios-in-progress-development-page-container2">
            <div className="apollonlab-studios-in-progress-development-page-container3">
              <React.Fragment>
                <iframe
                  src="https://unicorn.studio/embed/FKYgw4AICtWF1KhdkVjs"
                  width="100%"
                  height="110%"
                  loading="lazy"
                />
              </React.Fragment>
            </div>
          </div>
        </section>
        <div className="apollonlab-studios-in-progress-development-page-container4"></div>
      </div>
      <style jsx>
        {`
          .apollonlab-studios-in-progress-development-page-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .apollonlab-studios-in-progress-development-page-background-unicorn-state-active {
            flex: 0 0 auto;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
          }
          .apollonlab-studios-in-progress-development-page-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
          }
          .apollonlab-studios-in-progress-development-page-container3 {
            display: contents;
          }
          .apollonlab-studios-in-progress-development-page-container4 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 1600px) {
            .apollonlab-studios-in-progress-development-page-background-unicorn-state-active {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .apollonlab-studios-in-progress-development-page-container2 {
              width: 100%;
              height: 100%;
              display: flex;
              align-self: center;
              flex-direction: column;
            }
          }
          @media (max-width: 1200px) {
            .apollonlab-studios-in-progress-development-page-container2 {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
            }
            .apollonlab-studios-in-progress-development-page-container4 {
              height: 1082px;
            }
          }
          @media (max-width: 767px) {
            .apollonlab-studios-in-progress-development-page-container2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .apollonlab-studios-in-progress-development-page-background-unicorn-state-active {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ApollonlabStudiosInProgressDevelopmentPage
