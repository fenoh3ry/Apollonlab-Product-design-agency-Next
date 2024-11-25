import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import aboutsPageInitialPropsTqKsResource from '../../resources/abouts-page-initial-props-tq_ks'
import aboutsPageInitialPathsTq8uResource from '../../resources/abouts-page-initial-paths-tq_8u'

const Abouts = (props) => {
  return (
    <>
      <div className="abouts-container1">
        <Head>
          <title>Abouts - Apollonlab | Product design agency</title>
          <meta
            name="description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
          <meta
            property="og:title"
            content="Abouts - Apollonlab | Product design agency "
          />
          <meta
            property="og:description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
        </Head>
        <DataProvider
          renderSuccess={(AboutsEntity) => (
            <Fragment>
              <div className="abouts-container2">
                <h1>{AboutsEntity?.title}</h1>
                <span>{AboutsEntity?.id}</span>
              </div>
            </Fragment>
          )}
          initialData={props.aboutsEntity}
          persistDataDuringLoading={true}
          key={props?.aboutsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .abouts-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .abouts-container2 {
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

Abouts.defaultProps = {
  aboutsEntity: [],
}

Abouts.propTypes = {
  aboutsEntity: PropTypes.array,
}

export default Abouts

export async function getStaticProps(context) {
  try {
    const response = await aboutsPageInitialPropsTqKsResource({
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
        aboutsEntity: response?.data?.[0],
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
    const response = await aboutsPageInitialPathsTq8uResource({})
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
