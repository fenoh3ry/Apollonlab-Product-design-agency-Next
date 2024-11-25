import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import categoriesPageInitialPropsTqUvResource from '../../resources/categories-page-initial-props-tq_uv'

const Categories1 = (props) => {
  return (
    <>
      <div className="categories1-container1">
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
              <div className="categories1-container2">
                <Repeater
                  items={params}
                  renderItem={(CategoriesEntities) => (
                    <Fragment>
                      <div className="categories1-container3">
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
          .categories1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .categories1-container2 {
            display: flex;
            flex-direction: column;
          }
          .categories1-container3 {
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

Categories1.defaultProps = {
  categoriesEntities: [],
}

Categories1.propTypes = {
  categoriesEntities: PropTypes.array,
}

export default Categories1

export async function getStaticProps(context) {
  try {
    const response = await categoriesPageInitialPropsTqUvResource({
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
