import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Gallery2 = (props) => {
  return (
    <>
      <div className="gallery2-gallery3 thq-section-padding">
        <div className="gallery2-max-width thq-section-max-width">
          <div className="gallery2-section-title">
            <h2 className="gallery2-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery2-text4">
                    Explore Our Diverse Collection
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="gallery2-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery2-text3">
                    Discover a wide range of artistic expressions in our
                    gallery. From traditional paintings to modern installations,
                    there&apos;s something for every art lover.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery2-content">
            <div className="gallery2-container1"></div>
            <div className="gallery2-container2">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery2-image2 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery2-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery2-image31 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery2-container4">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery2-image32 thq-img-ratio-4-3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery2-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery2-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery2-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery2-text1 {
            text-align: center;
          }
          .gallery2-text2 {
            text-align: center;
          }
          .gallery2-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery2-container1 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-image2 {
            width: 100%;
            max-width: 600px;
            align-self: center;
          }
          .gallery2-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-image31 {
            width: 100%;
            max-width: 600px;
          }
          .gallery2-container4 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-image32 {
            width: 100%;
            max-width: 600px;
          }
          .gallery2-text3 {
            display: inline-block;
          }
          .gallery2-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery2-content {
              align-items: center;
              flex-direction: column;
            }
            .gallery2-image2 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery2-image31 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery2-image32 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
          }
          @media (max-width: 479px) {
            .gallery2-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Gallery2.defaultProps = {
  image2Alt: 'Sculpture exhibition',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image3Alt: 'Photography collection',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  content1: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  heading1: undefined,
  image4Alt: 'Mixed media artwork',
}

Gallery2.propTypes = {
  image2Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image3Src: PropTypes.string,
  content1: PropTypes.element,
  image2Src: PropTypes.string,
  heading1: PropTypes.element,
  image4Alt: PropTypes.string,
}

export default Gallery2
