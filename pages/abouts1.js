import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

const Abouts11 = (props) => {
  return (
    <>
      <div className="abouts11-container1">
        <Head>
          <title>Abouts1 - Apollonlab | Product design agency</title>
          <meta
            name="description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
          <meta
            property="og:title"
            content="Abouts1 - Apollonlab | Product design agency "
          />
          <meta
            property="og:description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="abouts11-container2">
                <Repeater
                  items={params}
                  renderItem={(AboutsEntities) => (
                    <Fragment>
                      <div className="abouts11-container3">
                        <h1>{AboutsEntities?.title}</h1>
                        <span>{AboutsEntities?.title}</span>
                        <span>{AboutsEntities?.id}</span>
                      </div>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          initialData={props.aboutsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .abouts11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .abouts11-container2 {
            display: flex;
            flex-direction: column;
          }
          .abouts11-container3 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Abouts11
