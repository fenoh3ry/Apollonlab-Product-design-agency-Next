import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import articlesPageInitialPropsTqCqResource from '../../resources/articles-page-initial-props-tq_cq'
import articlesPageInitialPathsTqSgResource from '../../resources/articles-page-initial-paths-tq_sg'

const Articles11 = (props) => {
  return (
    <>
      <div className="articles11-container1">
        <Head>
          <title>Articles1 - Apollonlab | Product design agency</title>
          <meta
            name="description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
          <meta
            property="og:title"
            content="Articles1 - Apollonlab | Product design agency "
          />
          <meta
            property="og:description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
        </Head>
        <DataProvider
          renderSuccess={(ArticlesEntity) => (
            <Fragment>
              <div className="articles11-container2">
                <h1>{ArticlesEntity?.title}</h1>
                <span>{ArticlesEntity?.description}</span>
                <span>{ArticlesEntity?.slug}</span>
              </div>
            </Fragment>
          )}
          initialData={props.articlesEntity}
          persistDataDuringLoading={true}
          key={props?.articlesEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .articles11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .articles11-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Articles11.defaultProps = {
  articlesEntity: [],
}

Articles11.propTypes = {
  articlesEntity: PropTypes.array,
}

export default Articles11

export async function getStaticProps(context) {
  try {
    const response = await articlesPageInitialPropsTqCqResource({
      ...context?.params,
      locale: context?.locale ?? 'en',
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        articlesEntity: response?.data?.[0],
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

export async function getStaticPaths() {
  try {
    const response = await articlesPageInitialPathsTqSgResource({})
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
