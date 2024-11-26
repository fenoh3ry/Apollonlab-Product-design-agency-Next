import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import globalsPageInitialPropsTqRdResource from '../../resources/globals-page-initial-props-tq_rd'

const Globals1 = (props) => {
  return (
    <>
      <div className="globals1-container1">
        <Head>
          <title>Globals1 - Apollonlab | Product design agency</title>
          <meta
            name="description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
          <meta
            property="og:title"
            content="Globals1 - Apollonlab | Product design agency "
          />
          <meta
            property="og:description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="globals1-container2">
                <Repeater
                  items={params}
                  renderItem={(GlobalsEntities) => (
                    <Fragment>
                      <div className="globals1-container3">
                        <span>{GlobalsEntities?.siteName}</span>
                        <span>{GlobalsEntities?.siteDescription}</span>
                        <span>{GlobalsEntities?.id}</span>
                      </div>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          initialData={props.globalsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .globals1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .globals1-container2 {
            display: flex;
            flex-direction: column;
          }
          .globals1-container3 {
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

Globals1.defaultProps = {
  globalsEntities: [],
}

Globals1.propTypes = {
  globalsEntities: PropTypes.array,
}

export default Globals1

export async function getStaticProps(context) {
  try {
    const response = await globalsPageInitialPropsTqRdResource({
      ...context?.params,
      locale: context?.locale ?? 'en',
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        globalsEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
