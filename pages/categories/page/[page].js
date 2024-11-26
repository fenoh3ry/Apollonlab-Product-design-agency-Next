import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import categoriesPageInitialPropsTq3bResource from '../../../resources/categories-page-initial-props-tq_3b'
import categoriesPageInitialPathsTqZwResource from '../../../resources/categories-page-initial-paths-tq_zw'

const Categories11 = (props) => {
  return (
    <>
      <div className="categories11-container1">
        <Head>
          <title>Categories1 - Apollonlab | Product design agency</title>
          <meta
            name="description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
          <meta
            property="og:title"
            content="Categories1 - Apollonlab | Product design agency "
          />
          <meta
            property="og:description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="categories11-container2">
                <Repeater
                  items={params}
                  renderItem={(CategoriesEntities) => (
                    <Fragment>
                      <div className="categories11-container3">
                        <h1>{CategoriesEntities?.name}</h1>
                        <span>{CategoriesEntities?.name}</span>
                        <span>{CategoriesEntities?.slug}</span>
                      </div>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          initialData={props.categoriesEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .categories11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .categories11-container2 {
            display: flex;
            flex-direction: column;
          }
          .categories11-container3 {
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

Categories11.defaultProps = {
  categoriesEntities: [],
}

Categories11.propTypes = {
  categoriesEntities: PropTypes.array,
}

export default Categories11

export async function getStaticProps(context) {
  try {
    const response = await categoriesPageInitialPropsTq3bResource({
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
        categoriesEntities: response,
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
    const response = await categoriesPageInitialPathsTqZwResource({})
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
