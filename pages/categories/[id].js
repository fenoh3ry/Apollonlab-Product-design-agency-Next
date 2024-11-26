import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import categoriesPageInitialPropsTqR5Resource from '../../resources/categories-page-initial-props-tq_r5'
import categoriesPageInitialPathsTqHQResource from '../../resources/categories-page-initial-paths-tq_h-q'

const Categories = (props) => {
  return (
    <>
      <div className="categories-container1">
        <Head>
          <title>Categories - Apollonlab | Product design agency</title>
          <meta
            name="description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
          <meta
            property="og:title"
            content="Categories - Apollonlab | Product design agency "
          />
          <meta
            property="og:description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
        </Head>
        <DataProvider
          renderSuccess={(CategoriesEntity) => (
            <Fragment>
              <div className="categories-container2">
                <h1>{CategoriesEntity?.name}</h1>
                <span>{CategoriesEntity?.slug}</span>
                <span>{CategoriesEntity?.description}</span>
              </div>
            </Fragment>
          )}
          initialData={props.categoriesEntity}
          persistDataDuringLoading={true}
          key={props?.categoriesEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .categories-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .categories-container2 {
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

Categories.defaultProps = {
  categoriesEntity: [],
}

Categories.propTypes = {
  categoriesEntity: PropTypes.array,
}

export default Categories

export async function getStaticProps(context) {
  try {
    const response = await categoriesPageInitialPropsTqR5Resource({
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
        categoriesEntity: response?.data?.[0],
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
    const response = await categoriesPageInitialPathsTqHQResource({})
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
