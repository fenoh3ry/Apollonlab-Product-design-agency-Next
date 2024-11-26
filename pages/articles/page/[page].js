import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import articlesPageInitialPropsTqJbResource from '../../../resources/articles-page-initial-props-tq_jb'
import articlesPageInitialPathsTqVJResource from '../../../resources/articles-page-initial-paths-tq_v-j'

const Articles1 = (props) => {
  return (
    <>
      <div className="articles1-container1">
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
              <div className="articles1-container2">
                <Repeater
                  items={params}
                  renderItem={(ArticlesEntities) => (
                    <Fragment>
                      <div className="articles1-container3">
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
          .articles1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .articles1-container2 {
            display: flex;
            flex-direction: column;
          }
          .articles1-container3 {
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

Articles1.defaultProps = {
  articlesEntities: [],
}

Articles1.propTypes = {
  articlesEntities: PropTypes.array,
}

export default Articles1

export async function getStaticProps(context) {
  try {
    const response = await articlesPageInitialPropsTqJbResource({
      ...context?.params,
      start: (context.params.page - 1) * 10,
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

export async function getStaticPaths() {
  try {
    const response = await articlesPageInitialPathsTqVJResource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
