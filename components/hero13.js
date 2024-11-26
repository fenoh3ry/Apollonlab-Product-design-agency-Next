import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero13 = (props) => {
  return (
    <>
      <div className="hero13-header78">
        <div className="hero13-column thq-section-padding thq-section-max-width">
          <div className="hero13-content1">
            <h1 className="hero13-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero13-text5">
                    Medium length hero headline goes here
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero13-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero13-text8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero13-actions">
            <button className="thq-button-filled hero13-button1">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero13-text7">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero13-button2">
              <span className="thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero13-text6">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="hero13-content2">
          <div className="hero13-row1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero13-placeholder-image10 thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero13-placeholder-image11 thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero13-placeholder-image12 thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero13-placeholder-image13 thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero13-placeholder-image14 thq-img-ratio-1-1"
            />
          </div>
          <div className="hero13-row2">
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero13-placeholder-image15 thq-img-ratio-1-1"
            />
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero13-placeholder-image16 thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero13-placeholder-image17 thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero13-placeholder-image18 thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero13-placeholder-image19 thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero13-placeholder-image20 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero13-header78 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero13-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero13-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero13-text1 {
            text-align: center;
          }
          .hero13-text2 {
            text-align: center;
          }
          .hero13-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero13-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .hero13-row1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .hero13-placeholder-image10 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image11 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image12 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image13 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image14 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-row2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .hero13-placeholder-image15 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image16 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image17 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image18 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image19 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-placeholder-image20 {
            width: 400px;
            height: 400px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero13-text5 {
            display: inline-block;
          }
          .hero13-text6 {
            display: inline-block;
          }
          .hero13-text7 {
            display: inline-block;
          }
          .hero13-text8 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .hero13-header78 {
              padding: var(--dl-space-space-threeunits);
            }
            .hero13-content2 {
              width: 100%;
            }
            .hero13-row1 {
              width: 100%;
              flex-direction: column;
            }
            .hero13-placeholder-image10 {
              width: 100%;
            }
            .hero13-placeholder-image11 {
              width: 100%;
            }
            .hero13-placeholder-image12 {
              width: 100%;
            }
            .hero13-placeholder-image13 {
              width: 100%;
            }
            .hero13-placeholder-image14 {
              width: 100%;
            }
            .hero13-row2 {
              width: 100%;
              display: none;
              flex-direction: column;
            }
            .hero13-placeholder-image15 {
              width: 100%;
            }
            .hero13-placeholder-image16 {
              width: 100%;
            }
            .hero13-placeholder-image17 {
              width: 100%;
            }
            .hero13-placeholder-image18 {
              width: 100%;
            }
            .hero13-placeholder-image19 {
              width: 100%;
            }
            .hero13-placeholder-image20 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero13-header78 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .hero13-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero13-button1 {
              width: 100%;
            }
            .hero13-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero13.defaultProps = {
  image8Alt: 'Hero Image',
  image8Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image5Src:
    'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image11Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  image4Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  heading1: undefined,
  image2Alt: 'Hero Image',
  action2: undefined,
  image11Src:
    'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  image10Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  image1Alt: 'Hero Image',
  image3Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image5Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image7Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image4Src:
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image7Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image6Alt: 'Hero Image',
  action1: undefined,
  content1: undefined,
  image10Alt: 'Hero Image',
}

Hero13.propTypes = {
  image8Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  heading1: PropTypes.element,
  image2Alt: PropTypes.string,
  action2: PropTypes.element,
  image11Src: PropTypes.string,
  image10Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image1Src: PropTypes.string,
  image7Src: PropTypes.string,
  image4Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  action1: PropTypes.element,
  content1: PropTypes.element,
  image10Alt: PropTypes.string,
}

export default Hero13
