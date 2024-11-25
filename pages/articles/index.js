import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import articlesPageInitialPropsTqSNResource from '../../resources/articles-page-initial-props-tq_s-n'

const Articles = (props) => {
  return (
    <>
      <div className="articles-container1">
        <Head>
          <title>Articles - Apollonlab | Product design agency</title>
          <meta
            name="description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
          <meta
            property="og:title"
            content="Articles - Apollonlab | Product design agency "
          />
          <meta
            property="og:description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="articles-container2">
                <Repeater
                  items={params}
                  renderItem={(ArticlesEntities) => (
                    <Fragment>
                      <div className="articles-container3">
                        <h1>{ArticlesEntities?.title}</h1>
                        <span>{ArticlesEntities?.title}</span>
                        <span>{ArticlesEntities?.description}</span>
                      </div>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          initialData={props.articlesEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .articles-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .articles-container2 {
            display: flex;
            flex-direction: column;
          }
          .articles-container3 {
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

Articles.defaultProps = {
  articlesEntities: [],
}

Articles.propTypes = {
  articlesEntities: PropTypes.array,
}

export default Articles

export async function getStaticProps(context) {
  try {
    const response = await articlesPageInitialPropsTqSNResource({
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
        articlesEntities: response,
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
