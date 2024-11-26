import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import aboutsPageInitialPropsTqPgResource from '../../resources/abouts-page-initial-props-tq_pg'

const Abouts1 = (props) => {
  return (
    <>
      <div className="abouts1-container1">
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
              <div className="abouts1-container2">
                <Repeater
                  items={params}
                  renderItem={(AboutsEntities) => (
                    <Fragment>
                      <div className="abouts1-container3">
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
          .abouts1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .abouts1-container2 {
            display: flex;
            flex-direction: column;
          }
          .abouts1-container3 {
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

Abouts1.defaultProps = {
  aboutsEntities: [],
}

Abouts1.propTypes = {
  aboutsEntities: PropTypes.array,
}

export default Abouts1

export async function getStaticProps(context) {
  try {
    const response = await aboutsPageInitialPropsTqPgResource({
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
        aboutsEntities: response,
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
