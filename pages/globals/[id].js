import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import globalsPageInitialPropsTqDkResource from '../../resources/globals-page-initial-props-tq_dk'
import globalsPageInitialPathsTqXmResource from '../../resources/globals-page-initial-paths-tq_xm'

const Globals = (props) => {
  return (
    <>
      <div className="globals-container1">
        <Head>
          <title>Globals - Apollonlab | Product design agency</title>
          <meta
            name="description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
          <meta
            property="og:title"
            content="Globals - Apollonlab | Product design agency "
          />
          <meta
            property="og:description"
            content="Apollonlab | Product design agency based in Antananarivo Madagascar, specialized in UX UI Design and No-code"
          />
        </Head>
        <DataProvider
          renderSuccess={(GlobalsEntity) => (
            <Fragment>
              <div className="globals-container2">
                <span>{GlobalsEntity?.siteName}</span>
                <span>{GlobalsEntity?.siteDescription}</span>
                <span>{GlobalsEntity?.id}</span>
              </div>
            </Fragment>
          )}
          initialData={props.globalsEntity}
          persistDataDuringLoading={true}
          key={props?.globalsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .globals-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .globals-container2 {
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

Globals.defaultProps = {
  globalsEntity: [],
}

Globals.propTypes = {
  globalsEntity: PropTypes.array,
}

export default Globals

export async function getStaticProps(context) {
  try {
    const response = await globalsPageInitialPropsTqDkResource({
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
        globalsEntity: response?.data?.[0],
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
    const response = await globalsPageInitialPathsTqXmResource({})
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
